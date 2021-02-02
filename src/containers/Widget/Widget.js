import React from 'react';
import { connect } from 'react-redux';
import { addComment, deleteComment } from '../../actions/actions';
import CommentsList from "../../components/CommentsList/CommentsList";
import CommentInputForm from "../../components/CommentInputForm/CommentInputForm";
import './Widget.css';

let Widget = (props) => {
  const { comments, addComment, deleteComment } = props;

  return(
    <div className='widget'>
      <CommentsList 
        comments={comments}
        deleteComment={deleteComment}
      />
      <CommentInputForm 
        addComment={addComment}
        required='required'
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addComment: (author, text) => dispatch(addComment(author, text)),
    deleteComment: (id) => dispatch(deleteComment(id))
  }
};

Widget = connect(
  mapStateToProps,
  mapDispatchToProps
)(Widget);

export default Widget;