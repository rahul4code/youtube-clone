import React, { useState, useEffect } from "react";
import NavPills from "./navPills/NavPills";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSidebar } from "../slices/navSlice";
import HomeShimmer from "./shimmer/HomeShimmer";
import {useSelector} from "react-redux";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const isSidebarOpen=useSelector(store=>store.navigation.isSidebarOpen)
  const dispatch = useDispatch();
  useEffect(() => {
    getVideoList();
    dispatch(openSidebar());
  }, []);

  const getVideoList = async () => {
    let url =
      process.env.REACT_APP_MODE === "LOCAL"
        ? "http://localhost:3000/VideoList.json"
        : `${process.env.REACT_APP_API_VIDEOLIST}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    const data = await fetch(url);
    const jsonData = await data?.json();
    setVideoList(jsonData?.items);
  };

  return (
    <div className={isSidebarOpen ? "relative ml-56" : "relative"}>
      {videoList?.length > 0 ? (
        <>
          <div className="px-8 top-14 sticky">
            <NavPills />
          </div>
            <div className={isSidebarOpen ? "flex flex-wrap mx-16 py-2" : "flex flex-wrap mx-5 py-2"}>
              {videoList?.map((video) => (
                <Link to={"watch?v=" + video?.id} key={video?.id}>
                  <VideoCard {...video} key={video?.id} />
                </Link>
              ))}
            </div>
        </>
      ) : (
        <HomeShimmer />
      )}
    </div>
  );
};

export default VideoContainer;
