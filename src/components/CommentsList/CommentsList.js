import React from 'react';
import Comment from "../Comment/Comment";
import './CommentsList.css';

const CommentsList = (props) => {
  const { comments, deleteComment } = props;
  return(
    <ul className='comments-list'>
      {comments.map(comment => 
        <Comment
          key={String(comment.id)}
          id={comment.id}
          author={comment.author}
          date={comment.date}
          text={comment.text}
          deleteComment={deleteComment}
        />
      )}
    </ul>
  );
}

export default CommentsList;