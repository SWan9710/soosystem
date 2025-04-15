import React from "react";
import "../styles/components/BackgroundColor.css";

const BackgroundColor = ({ title }) => {
  return (
    <div className="top-background-color">
      <h2>{title}</h2>
    </div>
  );
};

export default BackgroundColor;
