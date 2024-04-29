import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiClock, FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine, RiHistoryLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle, FiShoppingBag } from "react-icons/fi";
import { FaRegBuilding, FaRegUser, FaThumbsUp, FaVideo } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";

export const categories = [
  { name: "Home", icon: <AiFillHome />, type: "category-first" },
  { name: "Shorts", icon: <FiFilm />, type: "category-first" },
  { name: "Subscription", icon: <FaRegUser />, type: "category-first" },

  // <hr className="my-5 border-white/[0.2]" />,
  { name: "You >", type: "menu" },
  { name: "Your Channel", icon: <FaRegBuilding />, type: "menu" },
  { name: "History", icon: <RiHistoryLine />, type: "menu" },
  { name: "Playlists", icon: <IoIosListBox />, type: "menu" },
  { name: "Your Videos", icon: <FaVideo />, type: "menu" },
  { name: "Watch Later", icon: <FiClock />, type: "menu" },
  { name: "Liked Videos", icon: <FaThumbsUp />, type: "menu" },
  // <hr className="my-5 border-white/[0.2]" />,
  {
    name: "Subscriptions",

    type: "category-subscriptions",
  },
  // <hr className="my-5 border-white/[0.2]" />,
  {
    name: "Trending",
    icon: <MdLocalFireDepartment />,
    type: "category-explore",
  },
  { name: "Shopping", icon: <FiShoppingBag />, type: "category-explore" },
  { name: "Music", icon: <CgMusicNote />, type: "category-explore" },
  { name: "Films", icon: <FiFilm />, type: "category-explore" },
  { name: "Live", icon: <MdLiveTv />, type: "category-explore" },
  { name: "Gaming", icon: <IoGameControllerSharp />, type: "category-explore" },
  { name: "News", icon: <ImNewspaper />, type: "category-explore" },
  { name: "Sports", icon: <GiDiamondTrophy />, type: "category-explore" },
  { name: "Courses", icon: <RiLightbulbLine />, type: "category-explore" },
  { name: "Fashion & Beauty", icon: <GiEclipse />, type: "category-explore" },
  { name: "Podcasts", icon: <RiLightbulbLine />, type: "category-explore" },
  // <hr className="my-5 border-white/[0.2]" />,
  { name: "Settings", icon: <FiSettings />, type: "category-last" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "category-last" },
  { name: "Help", icon: <FiHelpCircle />, type: "category-last" },
  { name: "Send Feedback", icon: <RiFeedbackLine />, type: "category-last" },
  // <hr className="my-5 border-white/[0.2]" />,
];
