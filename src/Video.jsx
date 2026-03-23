import React from 'react'
import video1 from './videos/video1.mp4'

function Video() {
  return (
    <div className="w-full h-300px flex justify-center items-center bg-black">
      <video  src={video1} controls  autoPlay  loop  muted  className="w-[80%] rounded-lg"/>
    </div>  
  )
}

export default Video   