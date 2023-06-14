import React from "react";
import { FiMenu } from "react-icons/fi";
import { BsMicFill } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";
import { CiMenuKebab } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../slices/navSlice";

const Header = () => {

  const dispatch=useDispatch();

  const handleToggle=()=>{
    dispatch(toggleSidebar())
  }

  return (
    <div className="grid grid-cols-4 sticky top-0 z-10 bg-white">
      <div className="col-span-1 flex gap-6 px-6 py-4">
        <FiMenu className="text-xl cursor-pointer" onClick={handleToggle}/>
        <img
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          className="w-auto h-5"
        />
      </div>
      <div className="col-span-2 flex py-2 justify-center">
        <input
          className="w-[70%] h-10 rounded-l-full border border-gray-400 shadow-inner pl-4 before:bg-red-500"
          type="text"
          placeholder="Search"
        />
        <button className="px-5 py-3 w-16 rounded-r-full border h-10 border-gray-200 bg-gray-100">
          <SlMagnifier />
        </button>
        <BsMicFill className="h-10 text-lg ml-5"/>
      </div>
      <div className="col-span-1 flex px-7 py-4 gap-2 justify-end">
        <CiMenuKebab className="text-2xl mx-5"/>
        <HiOutlineUserCircle className="text-2xl" /> Sign in
      </div>
    </div>
  );
};

export default Header;
