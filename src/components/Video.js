import React, {useState} from 'react';
import { useParams, Link} from 'react-router-dom';
import YouTube from 'react-youtube';

// <------Components------>
import Comments from './Comments/Comments';

export default function Video() {
  const { id, videos } = useParams();

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  const opts = {
    height: '720',
    width: '1280',
    playerVars: {
      // https: `developers.google.com/youtube/player_parameters`,
      autoplay: 1,
    },
  };

  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };


  return (
    <div className="container ">
      <div className='row m-2 justify-content-center'>
        <div className="col-lg-12 col-md-10 col-sm-8">
          <YouTube videoId={id} onReady={onReady} opts={opts} />
          {/* <h2 className="text-center mt-3">{videos.snippet.title}</h2> 
          // Can't add video title to the component without rerouting the useEffect to app.js or into a fetch file. 
          // I don't want to do that on this branch(maybe once the team is complete.) */}
        </div>
        <div className="Description box bg-light rounded p-3">
          <p>
            <strong>235,000 views June 5,2023</strong>
          </p>

          {showMore && (
            <p>This page was coded and styled by Sarai Thomas</p>
          )}

          <Link onClick={handleToggle} 
            className=" text-decoration-none text-secondary">
            {showMore ? 'Show Less' : 'Show More'}
          </Link>
        </div>
        <Comments />
      </div>
    </div>
  );
}
