import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

export default function Comments () {
    const {id} = useParams()

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState({
        name:"",
        comment:""
    })

    const handleTextChange = (event) => {
        setComment({...comment, [event.target.id]:event.target.value})
    }

    const handleComment = (event) => {
        event.preventDefault()
        setComments([...comments, comment])
        setComment({name: "",comment: ""})
    }

  return (
    <div>
      <div className=''>
                <h4>Add a comment....</h4>

                <form onSubmit={handleComment}>

                    <label htmlFor='name'>Name: </label>

                    <input 
                        type="text"
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
                    {comments.map((com) => {
                        return (
                            <li key={id}>
                                {com.name}: {com.comment}
                            </li>
                        )
                    })}
                </ul>
            </div>
    </div>
  )
}
