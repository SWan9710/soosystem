import React, { useState, useEffect, useRef } from "react";
import "../styles/components/LogoCarousel.css";

const VISIBLE_COUNT = 5;
const ITEM_WIDTH = 200;
const ITEM_MARGIN = 13;
const SLIDE_WIDTH = ITEM_WIDTH + ITEM_MARGIN;
const SLIDE_INTERVAL = 3000;

const LogoCarousel = ({ logoList }) => {
  const [currentIndex, setCurrentIndex] = useState(VISIBLE_COUNT);
  const [currentList, setCurrentList] = useState([]);
  const carouselRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (logoList.length !== 0) {
      const prepend = logoList.slice(-VISIBLE_COUNT);
      const append = logoList.slice(0, VISIBLE_COUNT);
      const newList = [...prepend, ...logoList, ...append];
      setCurrentList(newList);
    }
  }, [logoList]);

  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.style.transition = "transform 0.5s ease-in-out";
    carouselRef.current.style.transform = `translateX(-${
      currentIndex * SLIDE_WIDTH
    }px)`;
  }, [currentIndex]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      const total = currentList.length;

      if (currentIndex === total - VISIBLE_COUNT) {
        // 마지막 → 처음으로 점프
        const resetIndex = VISIBLE_COUNT;
        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = `translateX(-${
          resetIndex * SLIDE_WIDTH
        }px)`;
        setCurrentIndex(resetIndex);

        // 다음 슬라이드를 곧바로 예약 (점프 후 대기 없이)
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setCurrentIndex(resetIndex + 1);
        }, SLIDE_INTERVAL);
        return;
      }

      if (currentIndex === 0) {
        const resetIndex = currentList.length - 2 * VISIBLE_COUNT;
        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = `translateX(-${
          resetIndex * SLIDE_WIDTH
        }px)`;
        setCurrentIndex(resetIndex);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setCurrentIndex(resetIndex + 1);
        }, SLIDE_INTERVAL);
        return;
      }

      // 일반적인 경우 → 다음 슬라이드 예약
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, SLIDE_INTERVAL);
    };

    const node = carouselRef.current;
    if (node) node.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      if (node) node.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex, currentList]);

  useEffect(() => {
    if (currentList.length === 0) return;

    // 초기 자동 슬라이드 예약
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, SLIDE_INTERVAL);

    return () => clearTimeout(timeoutRef.current);
  }, [currentList]);

  return (
    <div className="logo-list-wrapper">
      <ul className="logo-list" ref={carouselRef}>
        {currentList.map((src, index) => (
          <li key={`logo-${index}`} className="logo-list-item">
            <img src={src} alt={`logo-${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel;
