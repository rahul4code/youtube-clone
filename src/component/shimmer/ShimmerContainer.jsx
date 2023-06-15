import React from "react";
import ShimmerCard from "./ShimmerCard";
import {useSelector} from "react-redux"

const ShimmerContainer = () => {
  const items = Array(12).fill().map((_,index)=>index+1);

  const isSidebarOpen=useSelector(store=>store.navigation.isSidebarOpen)

  return (
    <div className={isSidebarOpen ? "flex flex-wrap mx-[5rem] py-5 gap-4" : "flex flex-wrap mx-5 py-2 gap-4"}>
      {items.map((item) => (
        <ShimmerCard key={item}/>
      ))}
    </div>
  );
};

export default ShimmerContainer;
