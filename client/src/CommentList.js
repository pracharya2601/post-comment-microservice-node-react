import React from 'react';

const CommentList = ({ comments }) => {


    const renderedComments = comments.map(comment => {
        return(
            <li key={comment.id}>
                <p>{comment.content}</p>
            </li>
        )
    })
    return(
        <ul>
            {renderedComments}
        </ul>
    )
}


export default CommentList;