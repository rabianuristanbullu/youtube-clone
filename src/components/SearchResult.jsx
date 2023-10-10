import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import loading from "../assets/loading.gif";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const SearchResult = () => {
  const [result, setResult] = useState(null);
  const { query } = useParams();
  useEffect(() => {
    fetchDataFromApi(`search/?q=${query}`).then((res) => {
      setResult(res.contents);
    });
  }, []);
  return (
    <div>
      {!result && (
        <div>
          <img className="loading" src={loading} alt="" />
        </div>
      )}
      {result && (
        <div className="d-flex bg-dark gap-5">
          <LeftNav />
          <div className="d-flex flex-column w-100">
            {result.map((video) => {
              if (video.type !== "video") return;
             return (<VideoCard video={video} />);
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
