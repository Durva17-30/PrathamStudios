import React from 'react'
import './VideoPlayer.css'
import video_src from '../../assets/videography.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} onClick={() => {setPlayState(false)}}>
      <video src={video_src} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer