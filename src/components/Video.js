import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

// <------Components------>
import Comments from './Comments';

export default function Video() {
  const { id, videos } = useParams();

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    console.log(videos);
    event.target.playVideo();
  };

  const opts = {
    height: '500',
    width: '640',
    playerVars: {
      // https: `developers.google.com/youtube/player_parameters`,
      autoplay: 1,
    },
  };



  return (
    <div className="container">
      <div>
        <YouTube videoId={id} onReady={onReady} opts={opts} />
        <h2>{videos?.snippet?.title}</h2>
        <Comments />
      </div>
    </div>
  );
}
