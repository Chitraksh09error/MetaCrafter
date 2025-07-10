import React from 'react';
import loaderVideo from '../assets/Metacraft.mp4';
import './Inloader.css';  // Import transition CSS here

const Inloader = ({ slideUp }) => {
  return (
    <div className={`loader-container ${slideUp ? 'slide-up' : ''}`}>
      <video
        src={loaderVideo}
        autoPlay
        muted
        loop
        playsInline
        className="loader-video"
      />
    </div>
  );
};

export default Inloader;
