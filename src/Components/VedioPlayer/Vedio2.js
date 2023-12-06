

import React from 'react';

const VideoComponent = () => {
  return (
    <video
    // style={{height:"100%" w}}
      className=""
      width="100%"
      height="100%"
    
      autoPlay
      muted
      loop
      playsInline
      poster="https://visitrasalkhaimah.com/wp-content/uploads/2023/11/Website-banners-1920x1080-1.jpg"
    >
      <source
        data-src="https://visitrasalkhaimah.com/wp-content/uploads/2023/11/Horizontal-website-home-pg-banner-video-RAK_POOL_16x9_1920x1080_English-2.mp4"
        type="video/mp4"
        src="https://visitrasalkhaimah.com/wp-content/uploads/2023/11/Horizontal-website-home-pg-banner-video-RAK_POOL_16x9_1920x1080_English-2.mp4"
      />
    </video>
  );
};

export default VideoComponent;
