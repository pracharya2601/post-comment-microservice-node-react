import React from 'react';
import axios from 'axios';

class CommentCreate extends React.Component {
    state = {
        content: ''
    }

    onSubmit = async event => {
        event.preventDefault();
        var content = this.state.content;
        var postId = this.props.postId;
        await axios.post(`http://myposts.com/posts/${postId}/comments`,{
            content
        });
        this.setState({content: ''});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>New Comment</label>
                        <input value={this.state.content} onChange={e => this.setState({content: e.target.value})} className="form-control" />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CommentCreate;