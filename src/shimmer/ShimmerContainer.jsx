import React from "react";
import Shimmer from "./ShimmerCard";

const ShimmerContainer = () => {
  const items = Array(10).fill(null);

  return (
    <div className="flex flex-wrap gap-5 justify-normal">
      {items.map((item) => (
        <Shimmer />
      ))}
    </div>
  );
};

export default ShimmerContainer;
