import React from 'react'
import ad from '../../../assets/ad.mp4'
const Advertisement = () => {
  return (
    <div className=' flex items-center justify-center'>
        <video src={ad} className='object-cover mt-10 rounded-full mx-6 max-h-[500px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]' autoPlay loop muted ></video>
    </div>
  )
}

export default Advertisement