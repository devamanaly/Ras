// import React, { useEffect, useRef } from 'react';
// import cloudinary from 'cloudinary-video-player';
// // Also possible:
// // import { videoPlayer } from 'cloudinary-video-player';
// // import 'cloudinary-video-player/cld-video-player.min.css';
// // import 'cloudinary-video-player/dist/cld-video-player.min.css';
// const VideoP = () => {
//   const cloudinaryRef = useRef();
//   const videoRef = useRef();

//   useEffect(() => {
//     if (cloudinaryRef.current) return;
//     cloudinaryRef.current = cloudinary.Cloudinary.new({ cloud_name: 'clbycloud-example' });
//     cloudinaryRef.current.videoPlayer(videoRef.current);
//   }, []);

//   return (
//     <video ref={videoRef}
//     data-cld-public-id="VID-20211102-WA0005"
//     />
//   );
// };

// export default VideoP;
import React from 'react';
import VideoComponent from './Vedio2';
import './style.css'
const App = () => {
  return (
    <div className='w-[100vw]  overflow-hidden' style={{height:"maxContent"}}>
     
      <VideoComponent />
      {/* Other components or content */}
    </div>
  );
};

export default App;
