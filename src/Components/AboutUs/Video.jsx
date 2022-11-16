import React,{useRef} from 'react';
import './Video.css'
import Demo from '../../Image/video-img.jpeg'
import Play from '../../Image/video.mp4';

const Video = () => {
  const videoRef = useRef();
  // console.log(videoRef.current)
  const handlePlay= () =>{
    document.getElementById("img").style.display = "none";
    document.getElementById("video_button").style.display = "block";
    videoRef.current.play();
  };

  const handlePause= () =>{
    document.getElementById("img").style.display="block";
    // document.getElementById("video_button").style.display = "none";
    // videoRef.current.pause();
  };

  return (
    <div className='video-main-container'>
         <div className='video-containor'>
           <div className='video-frame'>
             <div className='video-row'>
               <div className='video-wrapper' id='video'>
                 <div className='close-video' id="video_button" onClick={handlePause}>
                 </div>
                 <video className='video-tag' width="520" height="240" ref={videoRef} onClick={handlePlay}>
                   <source src="/Videos/video.mp4" type='video/mp4' id='video' className='video' ref={videoRef} >
                     </source>
                 </video>
                 <div className='video-image'>
                 <img src={Demo} alt="" id='img' className='video-img' onClick={handlePlay}/>
                 </div>
               </div>
             </div>
           </div>
         </div>
         </div> 
  );
}

export default Video;
