import React from "react";
import { Link } from "react-router-dom";

function Card() {
  const videos = require("./information.json");

  return (
    <React.Fragment>
      {videos.map((videoInfObj) => {
        const { id, title, channelName, videoThumb } = videoInfObj;
        return (
          <ul className="item">
            <li key={id}>
              <Link to={`/video/${id}`}>
                <img src={videoThumb} alt={title} />
              </Link>
              <div>
                <h3>{title}</h3>
                <h4>{channelName}</h4>
              </div>
            </li>
          </ul>
        );
      })}
    </React.Fragment>
  );
}

export default Card;
