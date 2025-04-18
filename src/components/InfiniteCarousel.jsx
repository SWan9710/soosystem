import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/components/InfinitieCarousel.css";

const InfiniteCarousel = ({ carouselList }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentList, setCurrentList] = useState([]);
  const carouselRef = useRef(null);

  let touchStartX;
  let touchEndX;

  useEffect(() => {
    if (carouselList.length !== 0) {
      const startData = carouselList[0];
      const endData = carouselList[carouselList.length - 1];
      const newList = [endData, ...carouselList, startData];
      setCurrentList(newList);
    }
  }, [carouselList]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex}00%)`;
    }
  }, [currentIndex]);

  const moveToNthSlide = (index) => {
    setTimeout(() => {
      setCurrentIndex(index);
      if (carouselRef.current) {
        carouselRef.current.style.transition = "";
      }
    }, 500);
  };

  const handleSwipe = (direction) => {
    const newIndex = currentIndex + direction;

    if (newIndex === carouselList.length + 1) {
      moveToNthSlide(1);
    } else if (newIndex === 0) {
      moveToNthSlide(carouselList.length);
    }

    setCurrentIndex((prev) => prev + direction);
    if (carouselRef.current) {
      carouselRef.current.style.transition = "all 0.5s ease-in-out";
    }
  };

  return (
    <div className="carousel-facilities-container">
      <div className="carousel-wrapper">
        <button className="swipe-left" onClick={() => handleSwipe(-1)}>
          <ChevronLeft />
        </button>
        <button className="swipe-right" onClick={() => handleSwipe(1)}>
          <ChevronRight />
        </button>
        <ul className="carousel" ref={carouselRef}>
          {currentList.map((image, index) => (
            <li key={`carousel-${index}`} className="carousel-item">
              <img src={image[0]} alt="carousel" />
              <h1 className="carousel-title">{image[1]}</h1>
              {Array.isArray(image[2]) && (
                <ul className="carousel-description">
                  {image[2].map((desc, i) => (
                    <li key={`desc-${i}`}>{desc}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
