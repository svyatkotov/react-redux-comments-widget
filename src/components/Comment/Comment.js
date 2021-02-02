import React from 'react';
import './Comment.css';

const Comment = (props) => {
  return(
    <li className='comment'>
      <span className='comment__author'>{props.author}: </span>{props.text}
      <div className='comment__footer'>
        <span className='comment__date'>{props.date}</span>
        <span className='comment__delete' onClick={ev => props.deleteComment(props.id)}>x</span>
      </div>
    </li>
  );
}

export default Comment;