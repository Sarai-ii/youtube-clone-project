import React from 'react'

const Videos = ({videos}) => {
  const videoDetails = videos.snippet 
  const id = videos.id

  return (
    <div>
      <h1>Videos</h1>
        {
          videos.map(video => {
            console.log(video.snippet.title)
            return (
              <>
              <h2>${video.snippet.title}</h2>
              </>
            )
          })
       
        }
    </div>
  )
}

export default Videos
