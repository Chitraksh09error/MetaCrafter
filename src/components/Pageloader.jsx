import React from 'react';
import loaderVideo from '../assets/pageloader.mp4';
import './Inloader.css';  // Import transition CSS here

const Pageloader = () => {
  return (
    <div className={`loader-container`}>
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

export default Pageloader;
