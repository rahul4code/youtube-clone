import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../slices/navSlice";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const watchId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="mx-[3rem] my-6 grid grid-cols-3 grid-row-3 gap-x-4">
      <div className="col-span-2">
        <iframe
          width="942"
          height="530"
          src={"https://www.youtube.com/embed/" + watchId + "?&amp;fs=1"}
          title="Lift Prank 17 | RJ Naved"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="">
          <p className="text-lg my-3 font-semibold">
            Lift Prank 17 | RJ Naved{" "}
          </p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img
                className="rounded-full h-10"
                alt="channelLogo"
                src="https://yt3.ggpht.com/0LvmH_y1efDISeYoqqwDXn97CRrNSOmfkWGvkKpYKTy2UET8B7jeofcJQkrOIg3Zx-L1U5iXo9A=s68-c-k-c0x00ffffff-no-rj"
              ></img>
              <ul>
                <li className="font-semibold">RJ Naved</li>
                <li className="text-xs">1.2 K Subscribers</li>
              </ul>
              <button className="rounded-full font-semibold text-sm px-4 bg-black m-2 py-2 text-white">
                Subscribe
              </button>
            </div>
            <div className="">
              <button className="rounded-full font-semibold text-sm px-4 bg-default m-2 py-2 ">
                👍 238 K | 👎
              </button>
              <button className="rounded-full font-semibold text-sm px-4 bg-default m-2 py-2 ">
                Share
              </button>
              <button className="rounded-full font-semibold text-sm px-4 bg-default m-2 py-2 ">
                Save
              </button>
              <button className="rounded-full font-bold text-sm px-4 bg-default m-2 py-2 ">
                ...
              </button>
            </div>
          </div>
          <div className="h-fit bg-default my-2 rounded-xl p-3 text-sm font-medium ">
            <p>
            This is the Description box <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br/>
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  <br/>
            .... <br/>
            <span className="text-[1rem]">Show more</span>
              </p>
          </div>
        </div>
        <div className="">Comment Section</div>
      </div>

      <div className="row-span-3">Comment Section</div>
    </div>
  );
};

export default WatchVideo;
