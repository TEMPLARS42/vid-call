import React, { useContext } from 'react';
import './VideoPlayer.css'; // Include the CSS file for styles
import ReactPlayer from 'react-player';

import { SocketContext } from '../context/SocketProvider';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  return (
    <div className="grid-container">
      {stream && (
        <div className="paper">
          <div className="video-container">
            <h5>{name || 'Name'}</h5>
            <video playsInline muted ref={myVideo} autoPlay className="video" />
            {/* {<ReactPlayer
              playing
              muted
              height="400px"
              width="700px"
              url={myVideo}
            />} */}
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="paper">
          <div className="video-container">
            <h5>{call.name || `Caller Name`}</h5>
            <video playsInline ref={userVideo} autoPlay className="video" />
            {/* {<ReactPlayer
              playing
              muted
              height="400px"
              width="700px"
              url={userVideo}
            />} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
