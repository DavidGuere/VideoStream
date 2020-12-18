import React from "react";
import { Link, useParams } from "react-router-dom";

function Results() {
  const { search } = useParams();
  const information = require("./information.json");

  function sweeper(object) {
    const { title, description, channelName, id, videoThumb } = object;
    if (
      title.toLowerCase().includes(search.toLowerCase()) ||
      description.toLowerCase().includes(search.toLowerCase()) ||
      channelName.toLowerCase().includes(search.toLowerCase())
    ) {
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
    }
  }
  return <React.Fragment>{information.map(sweeper)}</React.Fragment>;
}

export default Results;
