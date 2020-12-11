import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const videos = require("./information.json");

function Placeholder() {
  const { videoURL } = useParams();
  const [url, setUrl] = useState(" ");
  const [tit, setTit] = useState(" ");
  const [cat, setCat] = useState(" ");
  const [viw, setViw] = useState(" ");
  const [chn, setChn] = useState(" ");
  const [sub, setSub] = useState(" ");
  const [des, setDes] = useState(" ");

  useEffect(() => {
    const video_to_show = videos.find(
      (video_id) => video_id.id === parseInt(videoURL)
    );
    setUrl(video_to_show.videoURL);
    setTit(video_to_show.title);
    setCat(video_to_show.category);
    setViw(video_to_show.views);
    setChn(video_to_show.channelName);
    setSub(video_to_show.suscribers);
    setDes(video_to_show.description);
  }, []);

  return (
    <div>
      <div>
        <h2>{tit}</h2>
        <h4>Category: {cat}</h4>
      </div>
      <div>
        <video controls>
          <source src={url} type="video/mp4" />
        </video>
      </div>
      <div>
        <h4>{viw} views</h4>
        <h3>{chn}</h3>
        <h4>{sub} subscribers</h4>
        <h4>{des}</h4>
      </div>
    </div>
  );
}

export default Placeholder;
