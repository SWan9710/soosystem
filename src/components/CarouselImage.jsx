import React, { useState, useEffect, useRef } from "react";
import cat1 from "../assets/고양이.png";
import cat2 from "../assets/고양이2.png";
import cat3 from "../assets/노을고양이.png";
import cat4 from "../assets/눕방고양이.png";

import "../styles/components/CarouselImage.css";

const CarouselImage = () => {
  const sliderRef = useRef(null);
  return (
    <div>
      <div className="carousel-container">
        <img src={cat1} alt="" />
        <img src={cat2} alt="" />
        <img src={cat3} alt="" />
        <img src={cat4} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default CarouselImage;
