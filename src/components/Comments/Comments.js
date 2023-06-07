import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import "./Comments.css"

export default function Comments() {
  // const { id } = useParams();

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({
    name: '',
    comment: ''
  });
  const [commentCount, setCommentCount] = useState(0);
  const [editComment, setEditComment] = useState(-1);

  const handleTextChange = (event) => {
    setComment({ ...comment, [event.target.id]: event.target.value });
  };

  const handleComment = (event) => {
    event.preventDefault();
    if (comments.length) {
      if (editComment !== -1) {
        let updatedComments = [...comments];
        updatedComments[editComment] = comment;
        setComments(updatedComments);
        setEditComment(-1);
      } else {
        let updatedComments = [...comments, comment];
        setComments(updatedComments);
      }
      setCommentCount(comments.length + 1);
      setComment({ name: '', comment: '' });
    } else {
      setComments([comment]);
      setCommentCount(1);
      setComment({ name: '', comment: '' });
    }
  };

  const handleDelete = (index) => {
    let updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
    setCommentCount(updatedComments.length);
    if (editComment === index) {
      setEditComment(-1);
    }
  };

  const handleEdit = (index) => {
    setEditComment(index);
    setComment(comments[index]);
  };

  return (
    <div className=''>
      <div className=''>
        <div className=''>
        {commentCount} Comments
          <h4>Add a comment....</h4>
          <hr />
        </div>
        <form className='' onSubmit={handleComment}>
          <div className='form-floating mb-3 rounded-pill shadow'>
            <input
              type='text'
              id='name'
              className='form-control bg-light'
              value={comment.name}
              onChange={handleTextChange}
            />
            <label htmlFor='name'>Name:</label>
          </div>
          <div className='form-floating mb-3 rounded-pill shadow '>
            <input
              type='text'
              id='comment'
              className='form-control bg-light'
              value={comment.comment}
              onChange={handleTextChange}
            />
            <label htmlFor='comment'>Comment:</label>
          </div>
          <input
            type='submit'
            className='row btn comment-btn mb-3 '
            value={editComment !== -1 ? 'Update Comment' : 'Comment'}
          />
        </form>
        <hr />
        <ul>
          {
          comments.map((com, index) => {
            return (
              <li key={index}>
                {com.name}: {com.comment}
                <div className=''>
                  <button
                    className=' delete btn btn-secondary mr-3 p-1'
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    className='edit btn btn-outline-secondary ml-3 p-1'
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <br />
        <section>
          <h3>Recommended Videos</h3>
          <br />
          <br />
          <br />
        </section>
      </div>
    </div>
  );
}