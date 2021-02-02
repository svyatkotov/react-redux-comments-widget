import React from 'react';
import './CommentInputForm.css';

const CommentInputForm = (props) => {
  let inputAuthor;
  let inputText;

  return(
    <form className='form' onSubmit={ev => {
        ev.preventDefault();
        props.addComment(inputAuthor.value, inputText.value);
        inputAuthor.value = '';
        inputText.value = '';
      }}>
      <input 
        ref={node => {
          inputAuthor = node
        }}
        type='text'
        name='author'
        placeholder='Имя'
        className='form__input'
        required={props.required}
      />
      <textarea
        ref={node => {
          inputText = node
        }}
        type='text'
        name='text'
        placeholder='Комментарий'
        className='form__input'
        required={props.required}
      />
      <input 
        type='submit'
        value='Отправить'
        className='form__submit'
      />
    </form>
  );
}

export default CommentInputForm;