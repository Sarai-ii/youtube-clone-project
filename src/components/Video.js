import React from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube'

export default function Video ({videos}) {
  const { id } = useParams();

  const onReady = (event => {
    // access to player in all event handlers via event.target
    console.log(id)
    event.target.getPlayerMode();
    // event.target.pauseVideo();
  })
  const opts = {
      height: '500',
      width: '640',
      playerVars: {
        https: `developers.google.com/youtube/player_parameters`,
        autoplay: 1,
      },
    };

  return(
    <div className='container'>
      {
        console.log(videos)
        /*
        I CAN'T USE MAP AND THE VIDEOS PARAM IS NOT PASSING DOWN TO VIDEO W/O SHOWING THE CONTENTS OF VIDEO ON VIDEOS
        1. SHOULD I SWITCH THE CONTENTS OF EACH COMPONENT
        2. SHOULD I MAKE VIDEO THE MAIN COMPONENT AND PASS DOWN PROPS TO VIDEOS?
        */
        // videos.map((video) => {
          
              // <li key={video.id.videoId} className="video m-1 mt-3 col-3">
              //    <img className="card-img mt-3" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
              //    <h4 className="card-subtitle text-start m-2">{video.snippet.title}</h4>
              // </li>
          
        // })
      }
      <div>
        <YouTube videoId={id} onReady={onReady} opts={opts}/>
        {/* <h2>{videos.snippet.title}</h2>s */}
        {/* <iframe title={`YouTube video player for ${videos.snippet.title}`} width="560" height="315" src={`https://www.youtube.com/embed/${videos.id}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
      </div>
    </div>
  )
}
