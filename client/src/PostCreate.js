import React from 'react';
import axios from 'axios';

class PostCreate extends React.Component {

    state = {
        title: ''
    }

    onSubmit = async event => {
        event.preventDefault();
        var title = this.state.title;
        await axios.post('http://myposts.com/posts/create', {
            title
        })
        this.setState({title: ''})
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Create Post</label>
                        <input value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} className="form-control" />
                    </div>
                    <button className="btn btn-primary">submit</button>
                </form>
            </div>
        )
    }
    
}

export default PostCreate;