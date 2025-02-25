import React from "react";
import "../styles/components/BackgroundImage.css";

const BackgroundImage = ({ title, image }) => {
  return (
    <div
      className="top-background"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default BackgroundImage;
