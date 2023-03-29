import React, { useState } from "react";
import { useCustom } from "../content/ContentApi";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();
  const SearchHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery.length > 0
    ) {
      navigate(`search/${searchQuery}`);
    }
  };
  return (
    <div className=" w-full top-0 fixed z-30  bg-[#0f0f0f]  flex items-center justify-between py-2 px-7">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Link onClick={() => setProgress(100)} to={"/"} className="">
        <img
          src="https://raw.githubusercontent.com/ShariqAnsari88/youtube_clone/main/src/images/yt-logo-mobile.png"
          alt=""
          className=" inline-block h-5  md:hidden "
        />
        <img
          src="https://raw.githubusercontent.com/ShariqAnsari88/youtube_clone/main/src/images/yt-logo.png"
          alt=""
          className=" hidden md:inline-block h-5"
        />
      </Link>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={SearchHandler}
          />
        </div>
        <button
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
          onClick={() => SearchHandler("searchButton")}
        >
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
