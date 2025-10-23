import React from 'react'
import './video.css'

const Video = () => {
  return (
    <div className='video'>
      <div className="videoPostSection">
        <div className="video_youtube">
          <video width="400" controls autoPlay className='video_youtube_video'> 
            <source src={"https://youtu.be/V9vuCByb6js"} type='video/mp4' />

            <source src={"https://youtu.be/V9vuCByb6js"} type='video/webm' />
            Your Browser does not support the video tag.

          </video>
        </div>
      </div>
      </div>
  )
}

export default Video