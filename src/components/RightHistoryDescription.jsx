import React from "react";
import "../styles/components/RightHistoryDescription.css";

const RightHistoryDescription = ({ title, description, month }) => {
  return (
    <div className="right-container">
      <span id="right-dot"></span>

      <h1 id="right-container-title">{title}</h1>

      <div className="right-container-wrap">
        <div className="right-container-box">
          {month.map((mth, index) => (
            <h4 key={index}>{mth}</h4>
          ))}
        </div>
        <div className="right-container-box">
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightHistoryDescription;
