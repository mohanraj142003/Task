

import { Link } from 'react-router-dom'
import React, { useRef, useState } from "react";




import heroVideo from "../assets/back.mp4";


const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div className="flex justify-center w-full h-screen text-center">
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />

      <div
        className={`p-1 flex flex-col items-center justify-center duration-500 w-full ${
          isVideoPlaying ? "" : "bg-black/80"
        } ${isMenuShown ? "opacity-20" : "opacity-100"}`}
      >
    <div className='flex-col justify-center items-center w-96 p-5 h-98 rounded-[10%] bg-white'>
  
  <hl className='font-bold text-3xl flex justify-center items-center mt-5 '>Create Account</hl>

  <div className='flex-col mt-5'>
  <input type="text" className='border px-1 py-1 w-full'id="text" placeholder="NAME"/></div>

  <div className='flex-col mt-10'>
  <input type="text" className='border px-1 py-1 w-full'id="text" placeholder="EMAIL"/></div>
  
  <div className='flex-col mt-10'>
  <input type="password" id="pass"className='border px-1 py-1 w-full' placeholder="PASSWORD"/>
  </div>

  <div className='flex-col mt-10'>
  <input type="password" id="pass"className='border px-1 py-1 w-full' placeholder="CONFIRM PASSWORD"/>
  </div>
  <div className='flex gap-[9rem] ml-1'>
  <button type="button" class="mt-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">REGISTER</button>

  <Link to="/Signin" >
 
  <button type="button" class="mt-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">BACK</button>

  </Link>
  </div>
</div>



 </div> </div>
     
  );
};

export default HeroSection;
