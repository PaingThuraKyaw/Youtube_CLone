import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import VideoLength from '../Load/VideoLength';
const Relate = ({video,load}) => {
  return (
    <Link onClick={load} to={`/video/${video?.videoId}`}>
    <div className=" gap-2 items-center md:flex  md:flex-row mb-3">
        <div className="relative  h-36 md:h-24 bg-transparent lg:h-20 xl:h-24 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl md:bg-slate-800 overflow-hidden">
            <img
                className="h-full w-full object-cover"
                src={video?.thumbnails[0]?.url}
            />
            {video?.lengthSeconds && (
                <VideoLength time={video?.lengthSeconds} />
            )}
        </div>
        <div className=" mt-3 md:mt-0 flex  flex-col overflow-hidden">
            <span className=" font-bold text-md text-white">
                {video?.title}
            </span>
            <span className=" py-2 text-[12px] font-semibold text-white/[0.97] flex items-center">
                {video?.author?.title}
                {video?.author?.badges[0]?.type ===
                    "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[11px] lg:text-[10px] xl:text-[12px] ml-1" />
                )}
            </span>
            <div className=" text-[10px] flex">
                <span>{`${abbreviateNumber(
                    video?.stats?.views,
                    2
                )} views`}</span>
                <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                    .
                </span>
                <span className="truncate">
                    {video?.publishedTimeText}
                </span>
            </div>
        </div>
    </div>
</Link>
  )
}

export default Relate