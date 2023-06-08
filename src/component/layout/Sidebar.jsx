import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSlowMotionVideo, MdOutlineLocalMovies, MdOutlineWorkspacePremium } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { LuLibrary } from "react-icons/lu";
import { GoHistory } from "react-icons/go";
import { GiTrousers } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import {BiTrendingUp} from "react-icons/bi"
import { BsMusicNote, BsTrophy, BsLightbulb } from "react-icons/bs";
import { SiYoutubegaming, SiEclipsemosquitto } from "react-icons/si";

const Sidebar = () => {
  return (
    <div
      className="w-60 hover:overflow-y-scroll overflow-hidden"
    >
      <div className="w-52 mx-3 mb-3 h-[100vh] ">
        <ul className="py-3 px-1">
          <li className="flex gap-4 p-2 bg-[#f2f2f2] rounded-lg">
            <AiFillHome className="text-2xl" />
            <span className="font-semibold">Home</span>
          </li>
          <li className="flex gap-4 p-2">
            <MdOutlineSlowMotionVideo className="text-2xl" />
            <span className="">Shorts</span>
          </li>
          <li className="flex gap-4 p-2">
            <AiOutlineVideoCameraAdd className="text-2xl" />
            <span className="">Subscriptions</span>
          </li>
        </ul>
        <hr />
        <ul className="py-3">
          <li className="flex gap-4 p-2">
            <LuLibrary className="text-2xl" /> <span className="">Library</span>
          </li>
          <li className="flex gap-4 p-2">
            <GoHistory className="text-2xl" /> <span className="">History</span>
          </li>
        </ul>
        <hr />
        <ul className="py-3">
          <span className="p-2 text-lg font-medium">Explore</span>
          <li className="flex gap-4 p-2 mt-2">
            <BiTrendingUp className="text-2xl" />
            <span className="">Trending</span>
          </li>
          <li className="flex gap-4 p-2">
            <FaShoppingBag className="text-2xl" />
            <span className="">Shopping</span>
          </li>
          <li className="flex gap-4 p-2">
            <BsMusicNote className="text-2xl" />
            <span className="">Music</span>
          </li>
          <li className="flex gap-4 p-2">
            <MdOutlineLocalMovies className="text-2xl" />
            <span className="">Movies</span>
          </li>
          <li className="flex gap-4 p-2">
            <SiEclipsemosquitto className="text-2xl" />
            <span className="">Live</span>
          </li>
          <li className="flex gap-4 p-2">
            <SiYoutubegaming className="text-2xl" />
            <span className="">Gaming</span>
          </li>
          <li className="flex gap-4 p-2">
            <BsTrophy className="text-2xl" />
            <span className="">Sports</span>
          </li>
          <li className="flex gap-4 p-2">
            <BsLightbulb className="text-2xl" />
            <span className="">Learning</span>
          </li>
          <li className="flex gap-4 p-2">
            <GiTrousers className="text-2xl" />
            <span className="">Fashion & Beauty</span>
          </li>
        </ul>
        <hr />
        <ul className="py-3">
          <li className="flex gap-4 p-2">
            <GoHistory className="text-2xl" />
            <span className="">Browse Channels</span>
          </li>
        </ul>
        <hr />
        <ul className="py-3">
          <span className="p-2 text-lg font-medium">More from YouTube</span>
          <li className="flex gap-4 p-2 mt-2">
            <MdOutlineWorkspacePremium className="text-2xl" />
            <span className="">Youtube Premium</span>
          </li>
          <li className="flex gap-4 p-2">
            <MdOutlineSlowMotionVideo className="text-2xl" />
            <span className="">YouTube Music</span>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
