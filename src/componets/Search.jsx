import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetching } from "../Fetch/Api";
import LeftNav from "./LeftNav";
import SearchVideo from "./SearchVideo";

const Search = () => {
  const { query } = useParams();
  const [searchVd, setSearchVd] = useState();
  useEffect(() => {
    SearchFetch();
  }, [query]);

  const SearchFetch = () => {
    fetching(`search/?q=${query}`).then(({contents}) => {
      setSearchVd(contents);
    });
  };
  console.log(searchVd);
  return (
    <div className=" bg-[#0f0f0f] md:grid px-3 md:px-0 grid-cols-12">
      <div className=" col-span-2">
        <LeftNav />
      </div>
      <div className=" col-span-10">
       <div className=" mt-12 flex flex-col gap-4">
       {
          searchVd?.map(video => (
            <div key={video?.videoId} className=""><SearchVideo video={video?.video} /></div>
          ))
        }
       </div>
      </div>
    </div>
  );
};

export default Search;
