import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { calculateCount } from "../utils/calculateCount";

const VideoCard = (videoData) => {
  const [channelData, setChannelData] = useState({});
  const { snippet, statistics, id = "" } = videoData;
  const { thumbnails = { items: [] } } = snippet;
  const { items } = channelData;
  const channelThumbnail =
    items?.[0]?.snippet?.thumbnails?.default?.url ||
    "https://yt3.ggpht.com/0LvmH_y1efDISeYoqqwDXn97CRrNSOmfkWGvkKpYKTy2UET8B7jeofcJQkrOIg3Zx-L1U5iXo9A=s68-c-k-c0x00ffffff-no-rj";

  useEffect(() => {
    const url =
      process.env.REACT_APP_MODE === "LOCAL"
        ? "http://localhost:3000/ChannelList.json"
        : `${process.env.REACT_APP_API_CHANNEL_BY_ID}&id=${snippet?.channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    getChannelDetail(url);
  }, []);

  const getChannelDetail = async (url) => {
    const data = await fetch(url);
    const jsonData = await data.json();
    setChannelData(jsonData);
  };

  return (
    <div className="w-[359px] p-5 ml-2 content-around" key={id}>
      <img
        className="rounded-lg max-w-sm"
        alt="VideoThumbnail"
        src={
          thumbnails?.medium?.url ||
          "https://media.istockphoto.com/vectors/not-found-vector-id498570203?k=6&m=498570203&s=612x612&w=0&h=V8G2peD3defBr_veRXIo2yga8mUgagYUmI4qrIK0Q3M="
        }
      />
      <div className="flex py-3 gap-2 break-words">
        <img
          alt="channelThumbnail"
          className="h-10 rounded-full"
          src={channelThumbnail}
        />
        <ul>
          <li>
            <p className="font-semibold">
              {snippet?.title || "Yadnya Investment Academy"}
            </p>
          </li>
          <li className="text-gray-600 text-sm font-normal">
            {snippet?.channelTitle ||
              "Today's Stock Market News - 08/06/2023 | Aaj ki Taaza Khabar"}
          </li>
          <li className="text-gray-600 text-sm flex">
            <span>{calculateCount(statistics?.viewCount) || "2.5"} Views</span>
            <BsDot className="font-bold my-1 text-lg" />{" "}
            <span>{snippet?.publishedAt}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
