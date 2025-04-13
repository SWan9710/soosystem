import React, { useState, useRef } from "react";
import "../styles/components/ImageSlider.css";

const ImageSlider = ({ titles, images }) => {
  const sliderRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImage = images.length;
  const scrollTimeout = useRef(null);
  const scrollToIndex = (index) => {
    const container = sliderRef.current;
    const imageWidth = 500;
    const margin = 10;
    const totalWidth = imageWidth + margin * 2;
    const centerOffset = (container.clientWidth - imageWidth) / 2;
    const scrollLeft = index * totalWidth - centerOffset;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  };

  const moveToIndex = (newIndex) => {
    setCurrentIndex(newIndex);

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      scrollToIndex(newIndex);
    }, 150);
  };

  const moveLeft = () => {
    if (currentIndex > 0) {
      moveToIndex(currentIndex - 1);
    }
  };

  const moveRight = () => {
    if (currentIndex < totalImage - 1) {
      moveToIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <div className="image-container" ref={sliderRef}>
        <div className="container-slider">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`slider-${index}`} />
          ))}
        </div>
      </div>
      <div className="btn-container">
        <button onClick={moveLeft}>이전</button>
        <h1>{titles[currentIndex]}</h1>

        <button onClick={moveRight}>다음</button>
      </div>
    </div>
  );
};

export default ImageSlider;
