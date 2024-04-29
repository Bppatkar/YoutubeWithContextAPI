import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/Loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex h-14 flex-row items-center justify-between bg-white px-4 md:px-5 dark:bg-black">
      {loading && <Loader />}

      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-[#303030]/[0.6] md:mr-6 md:hidden"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-xl text-white" />
            ) : (
              <SlMenu className="text-xl text-white" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img
            className="hidden h-full dark:md:block"
            src={ytLogo}
            alt="Youtube"
          />
          <img className="h-full md:hidden" src={ytLogoMobile} alt="Youtube" />
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 rounded-l-3xl border border-[#303030] group-focus-within:border-blue-500 md:ml-10 md:h-10 md:pl-5 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="hidden w-10 items-center justify-center group-focus-within:md:flex">
            {/* <IoIosSearch className="text-xl text-white" /> */}
          </div>
          <input
            type="text"
            className="w-44 bg-transparent pl-5 pr-5 text-white outline-none md:w-64 md:pl-0 md:group-focus-within:pl-0 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            placeholder="Search"
            value={searchQuery}
          />
        </div>
        <button
          className="flex h-8 w-[40px] items-center justify-center rounded-r-3xl border border-l-0 border-[#303030] bg-white/[0.1] md:h-10 md:w-[60px]"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <IoIosSearch className="text-xl text-white" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="cursor-pointer text-xl text-white" />
          </div>
          <div className="ml-2 flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="cursor-pointer text-xl text-white" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
