import React from "react";

const ShimmerCard = () => {
  return (
    <div className="w-[359px]">
      <div className="h-56 rounded-lg bg-gray-300"></div>
      <div className="flex py-3 gap-2 ">
        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
        <ul className="">
          <li className="h-3 rounded-lg w-72 m-2 bg-gray-300"></li>
          <li className="h-3 rounded-lg w-36 m-2 bg-gray-300"></li>
        </ul>
      </div>
    </div>
  );
};

export default ShimmerCard;
