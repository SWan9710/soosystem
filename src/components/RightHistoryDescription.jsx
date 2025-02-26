import React from "react";
import "../styles/components/RightHistoryDescription.css";

const RightHistoryDescription = ({ title_year, description, month }) => {
  return (
    <div className="right-container">
      <span id="right-dot"></span>
      <h3 id="right-container-title">{title_year}</h3>

      <div className="right-container-wrap">
        <div className="right-container-box">
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
        <div className="right-container-box">
          {month.map((mth, index) => (
            <h4 key={index}>{mth}</h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightHistoryDescription;
