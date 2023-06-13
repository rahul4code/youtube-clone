import React from "react";
import Sidebar from "./layout/Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isSidebarOpen=useSelector(state=> state.isSidebarOpen)
  return (
    <>
      <div className="flex">
        {isSidebarOpen &&  <Sidebar />}
        <Outlet/>
      </div>
    </>
  );
};

export default Body;
