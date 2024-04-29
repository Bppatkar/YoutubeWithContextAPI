import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  return (
    <div className="flex h-[calc(100%-56px)] flex-row">
      <LeftNav />
    </div>
  );
};

export default Feed;
