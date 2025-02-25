import React, { useState, useRef } from "react";
import Video from "../assets/test.mp4";
import "../styles/components/BackgroundVideo.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const BackgroundVideo = () => {
  const videoRef = useRef();

  // 재생속도 조절 => 기본 1
  const setPlayBackRate = () => {
    videoRef.current.playbackRate = 0.5;
  };

  return (
    <a>
      <video
        className="background-video"
        muted
        autoPlay
        loop
        ref={videoRef}
        onCanPlay={() => setPlayBackRate()}
      >
        <source src={Video} type="video/mp4" />
      </video>
      <div className="more-button">
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
      </div>
    </a>
  );
};

export default BackgroundVideo;
