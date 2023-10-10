import React from "react";
import { Link } from "react-router-dom";
import millify from "millify";

const VideoCard = ({ video }) => {
  return (
    <Link className="text-decoration-none" to={`/watch/${video.video.videoId}`}>
      <div className="text-light">
        <div>
          <img
            className="rounded img-fluid"
            src={video.video.thumbnails[0].url}
          />
        </div>
        <div className="d-flex gap-2 p-2">
          <img className="channel-img" src={video.video.author.avatar[0].url} />
          <div>
            <p className="fw-bold">{video.video.title}</p>
            <p>{video.video.author.title}</p>
            <div className="d-flex gap-3">
              <p>{millify(video.video.stats.view)}</p>
              <p>{video.video.publishedTimeText}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
