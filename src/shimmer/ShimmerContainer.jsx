import React from "react";
import ShimmerCard from "./ShimmerCard";
import {useSelector} from "react-redux"

const ShimmerContainer = () => {
  const items = Array(12).fill(null);

  const isSidebarOpen=useSelector(store=>store.isSidebarOpen)

  return (
    <div className={isSidebarOpen ? "flex flex-wrap mx-[5rem] py-5 gap-4" : "flex flex-wrap mx-5 py-2 gap-4"}>
      {items.map((item) => (
        <ShimmerCard />
      ))}
    </div>
  );
};

export default ShimmerContainer;
