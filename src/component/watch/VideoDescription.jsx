import React from 'react'
import {GoThumbsup, GoThumbsdown} from "react-icons/go";
import {TbShare3} from "react-icons/tb"
import {AiOutlinePlusCircle} from "react-icons/ai"
import { calculateCount } from '../../utils/calculateCount';


const VideoDescription = (props) => {
    const {snippet, statistics}=props
  return (
     <div className="">
          <p className="text-lg my-3 font-semibold">
           {snippet?.title}
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
              <button className="rounded-full font-semibold text-sm px-4 bg-black m-2 py-2 text-white
              sm:py-2 sm:px-4 sm:text-sm
              md:py-2 md:px-4 md:text-sm
              lg:py-2 lg:px-4 lg:text-sm
              ">
                Subscribe
              </button>
            </div>
            <div className="flex">
              <button className="rounded-full font-semibold text-sm px-4 bg-default m-2 py-2 flex">
                <GoThumbsup className='m-1 mr-2' />  {calculateCount(statistics?.likeCount)} |   <GoThumbsdown className='m-1 ml-2'/>
              </button>
              <button className="rounded-full font-semibold text-sm px-4 bg-default m-2 py-2 flex">
               <TbShare3  className='m-1'/>   Share
              </button>
              <button className="rounded-full font-semibold text-sm px-4 bg-default m-2 py-2 flex">
                <AiOutlinePlusCircle className='m-1 mr-2' /> Save
              </button>
              <button className="rounded-full font-bold text-sm px-4 bg-default m-2 py-2 ">
                ...
              </button>
            </div>
          </div>
          <div className="h-fit bg-default my-2 rounded-xl p-3 text-sm">
            <div>
            <span className='font-medium'>{calculateCount(statistics?.viewCount)} views  {snippet?.publishedAt} </span><span className='font-medium text-blue-500'>{snippet?.tags?.join(' #')}</span><br/>
            <span dangerouslySetInnerHTML={{__html:snippet?.description}}></span>
            <br/>
            <span className="text-[1rem] font-medium">Show more</span>
              </div>
          </div>
        </div>
  )
}

export default VideoDescription