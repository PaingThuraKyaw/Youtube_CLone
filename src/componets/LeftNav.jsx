import React, { useState } from "react";
import { useCustom } from "../content/ContentApi";
import { categories } from "../Fetch/constant";
import LeftNavItem from "./LeftNavItem";
import "./App.css";
const LeftNav = ({progress,setProgress}) => {
  const { category, setCategory, isLoading } = useCustom();

  const Click = (name, type) => {
    setProgress(progress+100);
    switch (type) {
      case "category":
        return setCategory(name);
      case "home":
        return setCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div className=" mt-3 pt-12 flex flex-row md:inline-block overflow-y-auto md:sticky top-2 md:w-[200px] ">
      {categories.map((item) => {
        return (
          <div className="" key={item.name}>
            <LeftNavItem
              text={item.name === "home" ? "HOME" : item.name}
              icon={item.icon}
              action={() => Click(item.name, item.type)}
              className={item.name === category ? " change" : ""}
            />

            {item.divider && <hr className=" my-2 border-white/[0.2]" />}
          </div>
        );
      })}
    </div>
  );
};

export default LeftNav;
