import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
  MdOutlineSlowMotionVideo,
  MdOutlineLocalMovies,
  MdOutlineWorkspacePremium,
} from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { LuLibrary } from "react-icons/lu";
import { GoHistory } from "react-icons/go";
import { GiTrousers } from "react-icons/gi";
import { BiTrendingUp } from "react-icons/bi";
import { BsMusicNote, BsTrophy, BsLightbulb } from "react-icons/bs";
import { SiYoutubegaming, SiEclipsemosquitto } from "react-icons/si";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed z-10 top-14 left-0 bottom-0 bg-white hover:overflow-y-scroll overflow-hidden">
      <div className="w-52 mx-3 mb-3 h-[100vh] text-sm">
        <ul className="py-3 px-1">
          <li>
            <Link to="/" className="flex gap-x-6 p-2 bg-[#f2f2f2] rounded-lg">
              <AiFillHome className="text-2xl" />
              <span className="font-semibold pt-0.5">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <MdOutlineSlowMotionVideo className="text-2xl" />
              <span className="font-semibold pt-0.5">Shorts</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <AiOutlineVideoCameraAdd className="text-2xl" />
              <span className="font-semibold pt-0.5">Subscriptions</span>
            </Link>
          </li>
        </ul>
        <hr />
        <ul className="py-3">
          <li>
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <LuLibrary className="text-2xl" />{" "}
              <span className="font-semibold pt-0.5">Library</span>
            </Link>
          </li>

          <li className="font-semibold pt-0.5">
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <GoHistory className="text-2xl" />{" "}
              <span className="font-semibold pt-0.5">History</span>
            </Link>
          </li>
        </ul>
        <hr />
        <ul className="py-3">
          <span className="p-2 text-lg font-medium">Explore</span>
          <li className="font-semibold pt-0.5">
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <BiTrendingUp className="text-2xl" />
              <span className="font-semibold pt-0.5">Trending</span>
            </Link>
          </li>
          <li className="font-semibold pt-0.5">
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <span className="font-semibold pt-0.5">Shopping</span>
            </Link>
          </li>

          <li className="font-semibold pt-0.5">
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <BsMusicNote className="text-2xl" />
              <span className="font-semibold pt-0.5">Music</span>
            </Link>
          </li>
          <li className="font-semibold pt-0.5">
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <MdOutlineLocalMovies className="text-2xl" />
              <span className="font-semibold pt-0.5">Movies</span>
            </Link>
          </li>

          <li className="font-semibold pt-0.5">
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <SiEclipsemosquitto className="text-2xl" />
              <span className="font-semibold pt-0.5">Live</span>
            </Link>
          </li>

          <li className="font-semibold pt-0.5">
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <SiYoutubegaming className="text-2xl" />
              <span className="font-semibold pt-0.5">Gaming</span>
            </Link>
          </li>
          <li className="font-semibold pt-0.5">
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <BsTrophy className="text-2xl" />
              <span className="font-semibold pt-0.5">Sports</span>
            </Link>
          </li>

          <li className="font-semibold pt-0.5">
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <BsLightbulb className="text-2xl" />
              <span className="font-semibold pt-0.5">Learning</span>
            </Link>
          </li>

          <li className="font-semibold pt-0.5">
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <GiTrousers className="text-2xl" />
              <span className="font-semibold pt-0.5">Fashion & Beauty</span>
            </Link>
          </li>
        </ul>
        <hr />
        <ul className="py-3">
          <li className="font-semibold pt-0.5">
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <GoHistory className="text-2xl" />
              <span className="font-semibold pt-0.5">Browse Channels</span>
            </Link>
          </li>
        </ul>
        <hr />
        <ul className="py-3">
          <span className="p-2 text-lg font-medium">More from YouTube</span>
          <li className="font-semibold pt-0.5">
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <MdOutlineWorkspacePremium className="text-2xl" />
              <span>Youtube Premium</span>
            </Link>
          </li>

          <li className="font-semibold pt-0.5">
            <Link
              to="/"
              className="flex gap-x-6 p-2 hover:bg-[#f2f2f2] rounded-lg"
            >
              <MdOutlineSlowMotionVideo className="text-2xl" />
              <span>YouTube Music</span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
