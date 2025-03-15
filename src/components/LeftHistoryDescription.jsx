import React from "react";

import "../styles/components/LeftHistoryDescription.css";

const LeftHistoryDescription = ({ title, month, description }) => {
  return (
    <div className="left-container">
      <span id="left-dot"></span>

      <h1 id="left-container-title">{title}</h1>

      <div className="left-container-wrap">
        <div className="left-container-box">
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
        <div className="left-container-box">
          {month.map((mth, index) => (
            <h4 key={index}>{mth}</h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftHistoryDescription;
