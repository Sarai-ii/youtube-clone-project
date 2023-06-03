import React from 'react'
import YouTube from 'react-youtube'

const Videos = ({videos}) => {

 
    // const opts = {
    //   height: '390',
    //   width: '640',
    //   playerVars: {
    //     // https://developers.google.com/youtube/player_parameters
    //     autoplay: 1,
    //   },
    // };

    
  

  // const onReady = (event => {
  //   // access to player in all event handlers via event.target
  //   console.log(event)
  //   event.target.getPlayerMode();
  //   // event.target.pauseVideo();
  // })

  return (
    <div>
      <h1 className=''>Videos</h1>
        {
          videos.map(video => {
            const id = video.id
            console.log(id)

            return (
              <>
              {/* <YouTube video={video.id} opts={opts} onReady={onReady} />; */}
              <h2>${video.snippet.title}</h2>
              </>
            )
          })
       
        }
    </div>
  )
}

export default Videos
