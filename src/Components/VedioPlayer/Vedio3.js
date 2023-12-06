// // VideoPlayer.js

// import React, { useRef, useState } from 'react';

// const VideoPlayer = ({ src }) => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);

//   const togglePlayPause = () => {
//     if (videoRef.current.paused) {
//       videoRef.current.play();
//     } else {
//       videoRef.current.pause();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(videoRef.current.currentTime);
//   };

//   return (
//     <div>
//       <video
//         ref={videoRef}
//         src={src}
//         controls
//         onTimeUpdate={handleTimeUpdate}
//       />
//       <div>
//         <button onClick={togglePlayPause}>
//           {isPlaying ? 'Pause' : 'Play'}
//         </button>
//         <p>Current Time: {currentTime}</p>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;
