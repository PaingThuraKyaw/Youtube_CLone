import React, { useState } from "react";
import LeftNav from "./LeftNav";
import { useCustom } from "../content/ContentApi";
import VideoCard from "./VideoCard";
import LoadingBar from "react-top-loading-bar";

const Feed = () => {
  const { search, isLoading } = useCustom();
  const [progress, setProgress] = useState(0);

  return (
    <div className="md:grid bg-[#0f0f0f] grid-cols-12">
      {isLoading && (
        <LoadingBar
          color="#f11946"
          shadow={false}
          progress={progress}
          loaderSpeed={900}
          transitionTime={900}
        />
      )}
      <div className=" col-span-2">
        <LeftNav
          progress={progress}
          setProgress={setProgress}
          isLoading={isLoading}
        />
      </div>
      <div className=" mt-4 md:pt-12 col-span-10 w-full">
        <div className="grid grid-cols-1 px-2 md:grid-cols-3">
          {search?.map((video) => {
            if (video.type !== "video") return false;
            return (
              <div onClick={() => setProgress(100)} key={video?.videoId}  className="">
                <VideoCard
                  isLoading={isLoading}
                  progress={progress}
                  setProgress={setProgress}
                  video={video?.video}
                />
                ;
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
