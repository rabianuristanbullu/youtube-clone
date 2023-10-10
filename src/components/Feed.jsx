import React, { useContext } from "react";
import LeftNav from "./LeftNav";
import { Context } from "../context/contextApi";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { searchResult } = useContext(Context);
  console.log(searchResult);
  return (
    <div className="d-flex bg-dark" style={{ minHeight: "100vh" }}>
      <LeftNav />
      <div className="p-4 w-100 videos">
        {searchResult.map((video, index) => {
          if (video.type !== "video") return;
         return <VideoCard key={index} video={video} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
