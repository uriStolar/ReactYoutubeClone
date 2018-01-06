import React from 'react';

const VideoDetail = ({video}) => {
  if (!video){
    return <div>Loading...</div>
  }

  const videoID = video.id.videoId;
  const embedUrl = `http://www.youtube.com/embed/${videoID}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={embedUrl}></iframe>
      </div>
      <div className="details">
        <div className="font-weight-bold">{video.snippet.title}</div>
        <div className="small">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;