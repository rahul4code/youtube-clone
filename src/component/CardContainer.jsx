import React, {useState, useEffect} from 'react'
import NavPills from './NavPills'
import VideoCard from './VideoCard'

const CardContainer = () => {
  const [videoList, setVideoList]=useState([]);

  useEffect(()=>{
    getVideoList();
  },[])

  const getVideoList=async ()=>{
    let url=process.env.REACT_APP_MODE==='LOCAL' ? 'http://localhost:3000/ChannelList.json' : `${process.env.REACT_APP_API_BASE_URL}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    const data=await fetch(url)
    const jsonData=await data?.json();
      setVideoList(jsonData?.items)
  }

  if(videoList.length>0)
  {
    console.log({...videoList[0]}, true)
  }
  else
  {
    console.log(false)
  }


  return (
    videoList?.length>0 ? 
    <div className='px-6 h-[100vh]'>
      <NavPills />
      <div className='mx-[3.5rem] my-8 gap-4 flex flex-wrap'>
      {/* {console.log(videoList?.length, "Length")} */}
      <VideoCard {...videoList[0]}/>

      </div>
    </div> : <h1>Not Loaded</h1>
  )
}

export default CardContainer









 {/* {
        !videoList?.length > 0 ? null : videoList?.map(video=><VideoCard {...video} key={video?.id}/>)
        
      } */}