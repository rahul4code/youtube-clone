import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../slices/navSlice";
import { useSearchParams } from "react-router-dom";
import VideoDescription from "./VideoDescription";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [watchData, setWatchData]=useState({});
  const [searchParams] = useSearchParams();
  const watchId = searchParams.get("v");
  const {snippet={thumbnails:{}}}=watchData;
  console.log(watchData, "WatchData")

  useEffect(() => {
    dispatch(closeSidebar());
    !process.env.REACT_APP_MODE === "LOCAL" && getVideoDetail()
  }, []);

  const getVideoDetail=async()=>{ 
    const data=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${watchId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    const jsonData = await data.json()
    setWatchData(jsonData?.items?.[0])
  }

  return (
    <div className="mx-[3rem] my-6 grid grid-cols-3 grid-row-3 gap-x-4">
      <div className="col-span-2">
        <iframe
          width="942"
          height="530"
          src={"https://www.youtube.com/embed/" + watchId + "?&amp;fs=1"}
          title={snippet?.thumbnails?.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <VideoDescription {...watchData}/>
        <div className="">Comment Section</div>
      </div>
      <div className="row-span-3">Live Comment Section</div>
    </div>
  );
};

export default WatchVideo;
