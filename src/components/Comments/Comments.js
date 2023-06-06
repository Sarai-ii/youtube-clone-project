import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Comments() {
  const { id } = useParams();

  const [comments, setComments] = useState([]);
  // const [name, setName] = useState('');
  // const [comment, setComment] = useState('');
  const [comment, setComment] = useState({
    name: '',
    comment: ''
  })
  const [commentCount, setCommentCount] = useState(0);
  const [editComment, setEditComment] = useState(-1);
  /*keeping track of the index/position of each comment
  setting the index to -1 will make it so no comment is automically being edited
  */

  const handleTextChange = (event) => {
    setComment({ ...comment, [event.target.id]: event.target.value });
  };

  const handleComment = (event) => {
    event.preventDefault();
    if (comments.length){
      if (editComment !== -1){
      let updatedComments = [...comments]
      updatedComments[editComment] = comment
      setComment(updatedComments);
      setEditComment(-1)
      }else{
      let updatedComments = [...comments, comment] 
        setComments(updatedComments);
      }
      setCommentCount(comments.length)
      setComment({name: '', comment: ''})
    }
  }
  const handleDelete = (index) => {
    let updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
    setCommentCount(updatedComments.length);
    if (editComment === index) {setEditComment(-1)}
  };
  const handleEdit = (index => {
    setEditComment(index)
    setComment(comments[index])
  })
  return (
    <div className=''>
      <div className='row'>
        <div>
          Total comments: {commentCount}
          <h4>Add a comment....</h4>
          <hr/>
        </div>

        <form className="" onSubmit={handleComment}>
          <label htmlFor='name'>Name: </label>
          <input type='text' id='name' value={comment.name} onChange={handleTextChange} />
          
          <label htmlFor='comment'>Comment: </label>
          <input type='text' id='comment' value={comment.comment} onChange={handleTextChange} />
          
          <input className="row justify-content-right comment-button btn btn-outline-secondary-active" 
          type='submit' value={editComment !== -1 ? 'Update Comment' : 'Comment'} />
        </form>
        <hr />
        <ul>
          {comments.map((com, index) => {
            return (
              <li key={index}>
                {com.name}:  {com.comment}
                <div className="btn">
                <button 
                className="btn btn-outline-secondary p-1"
                onClick={() => handleDelete(index)}>Delete</button>
                <button 
                className="btn btn-outline-secondary p-1"
                onClick={() => handleEdit(index)}>Edit</button>
                </div>
              
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}