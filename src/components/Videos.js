import React from 'react'
import {Link} from 'react-router-dom'

// <-----Styling-----> 
import './Videos.css'

const Videos = ({videos}) => {
  return (
    <div className='container'>
        <section className="col">
          <ul className="row">
            {
            videos.map((video) => (
              <li key={video.id.videoId} className="video m-1 mt-3 col-3">
                <Link to={`/videos/${video.id.videoId}`}>
                  <img className="card-img mt-3" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                  <h4 className="card-subtitle text-start m-2">{video.snippet.title}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </section>
    </div>
  );
}

export default Videos
