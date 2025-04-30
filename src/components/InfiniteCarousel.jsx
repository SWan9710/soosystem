import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/components/InfinitieCarousel.css";

const InfiniteCarousel = ({ carouselList }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentList, setCurrentList] = useState([]);
  const carouselRef = useRef(null);

  // 받아온 데이터 정보 currentList에 저장
  useEffect(() => {
    if (carouselList.length !== 0) {
      const startData = carouselList[0];
      const endData = carouselList[carouselList.length - 1];
      const newList = [endData, ...carouselList, startData];
      setCurrentList(newList);
    }
  }, [carouselList]);

  // useEffect에서 인덱스를 주시해서 인덱스가 변경되면 해당 인덱스로 캐러셀 이동
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex}00%)`;
    }
  }, [currentIndex]);

  //  슬라이드 점프효과 -> style 일시제거
  const moveToNthSlide = (index) => {
    setTimeout(() => {
      setCurrentIndex(index);
      if (carouselRef.current) {
        carouselRef.current.style.transition = "";
      }
    }, 500);
  };

  // 버튼이벤트
  const handleSwipe = (direction) => {
    const newIndex = currentIndex + direction;

    // 현재 인덱스정보를 토대로 슬라이드 점프
    // 마지막 슬라이드인 경우 1번으로 이동, 0번인 경우 마지막 슬라이드로 이동
    if (newIndex === carouselList.length + 1) {
      moveToNthSlide(1);
    } else if (newIndex === 0) {
      moveToNthSlide(carouselList.length);
    }

    // 현재 인덱스에 받아온 이동정보를 토대로 인덱스 초기화
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
          {currentList.map((info, index) => (
            <li key={`carousel-${index}`} className="carousel-item">
              <img src={info[0]} alt="carousel" />
              <h1 className="carousel-title">{info[1]}</h1>
              {Array.isArray(info[2]) && (
                <ul className="carousel-description">
                  {info[2].map((desc, i) => (
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
