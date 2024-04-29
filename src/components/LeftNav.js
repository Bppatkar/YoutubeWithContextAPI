import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";
import "./LeftNav.css";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);
  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category-first":
      case "category-you":
      case "category-subscriptions":
      case "category-explore":
      case "category-last":
        setSelectedCategory(name);
        break;
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`absolute z-10 h-full w-[240px] translate-x-[-240px] overflow-y-auto bg-black py-4 transition-all md:relative md:block md:translate-x-0 ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className=" flex flex-col px-5">
        {categories.map((item, index) => {
          if (!item.name && index === 0) return null;
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {categories[index + 1] &&
                categories[index + 1].type &&
                item.type !== categories[index + 1].type && (
                  <hr className="my-5 border-white/[0.2]" />
                )}
            </React.Fragment>
          );
        })}
        <div className="text-[12px] text-white/[0.5]">
          Clone by: Bhanu Pratap Patkar
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
