import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const Comments = () => {
    const {id} = useParams()

    const [comments, setComments] = useState([])
    const [comment, setComment]=useState({
        name:"",
        comment:""
    })

    const handleTextChange = (e) => {
        setComment({...comment, [e.target.id]:e.target.value})
    }

    const handleComment = (e) => {
        e.preventDefault()
        setComments([...comments, comment])
        setComment({name: "",comment: ""})
    }

  return (
    <div>
      <div className='video__comments'>
                <h4>Add a comment</h4>
                <form onSubmit={handleComment}>
                    <label htmlFor='name'>Name: </label>
                    <input 
                        type="text"
                        id="name"
                        onChange={handleTextChange}
                    />
                    <br></br>
                    <label htmlFor='comment'>Comment: </label>
                    <input 
                        type="text"
                        id="comment"
                        onChange={handleTextChange}
                    />
                    <br></br>
                    <input type="submit"></input>
                </form>
                <hr></hr>
                <ul>
                    {comments.map((element) => {
                        return (
                            <li key={id}>
                                {element.name}: {element.comment}
                            </li>
                        )
                    })}
                </ul>
            </div>
    </div>
  )
}

export default Comments
