import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

export default function Video({ videos }) {
  const { id } = useParams();

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    console.log(videos);
    event.target.playVideo();
  };
// customUrl
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
      </div>
    </div>
  );
}
