import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetching } from "../Fetch/Api";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import Relate from "./Relate";
import { useCustom } from "../content/ContentApi";
import LoadingBar from 'react-top-loading-bar'

const VideoDetials = () => {
  const {isLoading,setIsLoading} = useCustom();
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const [relate, setRelate] = useState([]);
  const [progress, setProgress] = useState(0)


  const load = () => {
    setProgress(100);
  }

  useEffect(() => {
    Detail();
    Related();
  }, [id]);

  const Detail = () => {
    fetching(`video/details/?id=${id}`).then((res) => {
      setIsLoading(true)
      console.log(res);
      setDetail(res);
      setIsLoading(false)
    });
  };

  const Related = () => {
    setIsLoading(true)
    fetching(`video/related-contents/?id=${id}`).then(({contents}) => {
      setRelate(contents);
      setIsLoading(false)
    });
  };
  return (
    <div className=" h-auto md:px-5 md:mt-17 px-4 md:grid md:grid-cols-5 gap-4 md:py-5  md:justify-center text-white pt-20  bg-[#0f0f0f]">
      {
        isLoading &&  <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      }
      <div className=" col-span-3">

      <div className=" sticky top-16">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width={"100%"}
          style={{ backgroundColor: "#000000" }}
          playing={true}
        />
        {/* title */}
        <div className="">
          <h1 className=" py-3 md:text-xl font-bold">{detail?.title}</h1>
          {/* paragraph */}
          <div className="flex justify-between">
            <div className=" flex items-center mb-5 md:mb-0 space-x-2">
              <img
                src={detail?.author?.avatar[0]?.url}
                alt=""
                className=" h-9 w-9 rounded-full"
              />
              <div className=" md:w-auto w-[200px]">
                <p className=" flex items-center  text-sm">
                  {detail?.author?.title} <span className="px-1"> </span>{" "}
                  {detail?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className=" text-white/[0.7]" />
                  )}
                </p>
                <p className=" hidden md:inline-block text-[10px]">
                  {detail?.author?.stats?.subscribersText}
                </p>
                <p className="text-[10px] hidden md:inline-block">
                  {`${abbreviateNumber(detail?.stats?.views, 2)} Views`}
                </p>
              </div>
              <div className=" md:pl-2 pl-8">
                <button className="bg-white/[0.9] px-4 md:px-6 py-[4px] md:py-2 text-zinc-900 font-semibold  rounded-full text-sm">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="md:flex hidden  text-white mt-4 md:mt-0">
              <div className="flex items-center h-11 px-5 rounded-3xl text-sm bg-white/[0.15]">
                <AiOutlineLike className="text-xl text-white mr-2" />
                <span className=" border-r pr-2">
                  {`${abbreviateNumber(detail?.stats?.views, 2)} Likes`}
                </span>
                <AiOutlineDislike className="text-xl  text-white ml-2 " />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className=" col-span-2">
          {
            relate?.map(video => <Relate load={load} video={video?.video}/>)
          }
      </div>
    </div>
  );
};

export default VideoDetials;
