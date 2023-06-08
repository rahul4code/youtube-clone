import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";

const VideoCard = (videoData) => {
  const [channelData, setChannelData]=useState({});
  const { snippet, statistics, id } = videoData;
  const { thumbnails } = snippet;
  // const {items}= channelData || {items:[]};
  // const channelThumbnail="" || items[0]?.snippet?.thumbnails?.default?.url;

  // useEffect(() => {
  //   getChannelDetail();
  // }, []);

  // const getChannelDetail = async () => {
  //   const data = await fetch(
  //     `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${snippet?.channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  //   );
  //   const jsonData = await data.json();
  //   setChannelData(jsonData)
  // };

  return (
    <div className="w-[360px]">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium?.url || "https://i.ytimg.com/vi/7qvAdY5cql0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCH9m1qeF3TbR7NBS9vdTl7QKW12Q"}
      />
      <div className="flex py-3 gap-2">
        <img
          alt="channelThumbnail"
          className="h-10 rounded-full"
          src={"https://yt3.ggpht.com/0LvmH_y1efDISeYoqqwDXn97CRrNSOmfkWGvkKpYKTy2UET8B7jeofcJQkrOIg3Zx-L1U5iXo9A=s68-c-k-c0x00ffffff-no-rj"}
        />
        <ul>
          <li>
            <p className="font-semibold">{snippet?.title || "Yadnya Investment Academy"}</p>
          </li>
          <li className="text-gray-600 text-sm font-normal">
            {snippet?.channelTitle || "Today's Stock Market News - 08/06/2023 | Aaj ki Taaza Khabar"}
          </li>
          <li className="text-gray-600 text-sm flex">
            <span>{statistics?.viewCount || "2.5"} Views</span>
            <BsDot className="font-bold my-1 text-lg" />{" "}
            <span>{snippet?.publishedAt}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
