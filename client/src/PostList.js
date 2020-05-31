import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

class PostList extends React.Component {
    state = {
        posts: {}
    }
    componentDidMount() {
        setTimeout(() => {
            this.fetchPost();
        }, [])
    }

    fetchPost = async () => {
        const res = await axios.get('http://myposts.com/posts');
        this.setState({posts: res.data});
    }
    renderedPost = () => {
        return _.map(this.state.posts, (post, i) => {
            return(
                <div className="card" style={{width: '30%', marginBottom: '20px'}} key={post.id}>
                    <div className="card-body">
                        <h3>{post.title}</h3>
                        <CommentList comments={post.comments} />
                        <CommentCreate postId={post.id} />
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="d-flex flex-row flex-wrap justify-content-between">
                {this.renderedPost()}
            </div>
        )
    }
}

export default PostList;