import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import ReactPlayer from "react-player/youtube";
import loading from "../assets/loading.gif";
import millify from "millify";
import VideoCard from "./VideoCard";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const { videoId } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);
  useEffect(() => {
    fetchVideoDetail();
    fetchRelatedVideos();
  }, []);

  const fetchVideoDetail = () => {
    fetchDataFromApi(`video/details/?id=${videoId}`).then((res) => {
      setVideo(res);
    });
  };

  const fetchRelatedVideos = () => {
    fetchDataFromApi(`video/related-contents/?id=${videoId}`).then((res) => {
      setRelatedVideos(res.contents);
    });
  };
  return (
    <div
      className="d-flex bg-dark text-light gap-2"
      style={{ minHeight: "100vh" }}
    >
      {!video && (
        <div>
          <img className="loading" src={loading} alt="" />
        </div>
      )}
      {video && (
        <>
          <div className="flex-grow-1">
            <ReactPlayer
              controls
              playing={true}
              height="70vh"
              width="100%"
              url={`https://www.youtube.com/watch?v=${videoId}`}
            />
            <div>
              <h3> {video.title} </h3>
              <div className="d-flex gap-5">
                <img src={video.author.avatar[0].url} alt="" />
                <p>{video.author.title}</p>
                <p>{video.author.subscribersText}</p>
                <p>Beğeni: {video.stats.likes} </p>
                <p>İzlenme: {millify(video.stats.views)} </p>
              </div>
            </div>
          </div>
          <div>
            {relatedVideos.map((video) => {
              if (video.type !== "video") return;
              return <VideoCard video={video} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default VideoDetail;
