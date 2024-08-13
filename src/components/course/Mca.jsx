import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { MCA } from '../../assets/Assets'
import ReactPlayer from 'react-player'

const Mca = () => {
  const[sem,setSem]=useState("--sem--")
  const[paper,setPaper]=useState("--paper--")
  const[video,setVideo]=useState("--video--")
  const[link,setLink]=useState(false)
  const[lock,setLock]=useState(false)
  const[papers,setPapers]=useState([])
  const[videos,setVideos]=useState([])
  const changeSem=(event)=>{
    setSem(event.target.value)
    setPapers(MCA.find(sem=>sem.name===event.target.value).papers)
  }
  const changePaper=(event)=>{
    setPaper(event.target.value)
    setVideos(papers.find(paper=>paper.name===event.target.value).videos)
  }
  const changeVideo=(event)=>{
    setLink(true)
    setVideo(event.target.value)
  }
  // useEffect((event)=>{
    
  //     setVideo(event.target.value)
    
  // },[video])
  return (
    <div>
        <Navbar/>
        <div className=' flex justify-center items-center'>
            <h1 className=' text-xl mt-3 sm:text-3xl'>MCA</h1>
        </div>
        <div className=' flex justify-center items-center px-0 sm:px-3 ' >
        <div className=' container mt-2 mx-3 ' >
        <div className=' overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center '>
        <div className=' container pb-8 sm:pb-0'>

        <div className=' flex  flex-col sm:flex-row md:flex-col items-center sm:items-center sm:justify-center sm:gap-10 w-full text-black'>
          <div>
            <h3>Select SEM</h3>
            <select className='border-2 border-gray-400 p-2 rounded-md w-80' value={sem} onChange={changeSem}>
              <option >--sem--</option>
              {MCA.map(sem =>(
                <option value={sem.name} key={sem.name}>{sem.name}</option>
              ))}
            </select>
            </div>
            <div>
            <h3>Select PAPER</h3>
            <select className='border-2 border-gray-400 p-2 rounded-md w-80' value={paper} onChange={changePaper}>
              <option >--paper--</option>
              {papers.map(paper =>(
                <option value={paper.name} key={paper.name} >{paper.name}</option>
              ))}
            </select>
            </div>
            <div>
            <h3>Select VIDEOS</h3>
            <select className='border-2 border-gray-400 p-2 rounded-md w-80' value={video} onChange={changeVideo}>
              <option >--video--</option>
              {videos.map(video =>(
                <option key={video.name} className='text-wrap h-auto' value={video.link}>{video.name}</option>
                
              ))}
            </select>
            </div>
            {lock? link?<div className='lg:hidden mt-4 mb-4'>
              <ReactPlayer url={video} controls={true} width={300} height={250}/>
            </div> :<h2 className='mt-3 mb-3' >Select Video</h2>:<h2 className='mt-3 mb-3'>You need to subscribe</h2>}
            {lock? link?<div className='lg:block hidden mt-4 mb-4'>
              <ReactPlayer url={video} controls={true} width={640} height={360}/>
            </div>:"" :""}
            
            {lock?"":<button className='bg-primary text-white bg-orange-500 cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full ' onClick={()=>setLock(true)}>
              subscribe
            </button>}
          
        </div>

       </div> 
       </div> 
      </div>
        </div>

    </div>
  )
}

export default Mca