import React, { useState, useEffect, useRef } from "react";
import "../styles/components/TopMoveBtn.css";

const TopMoveBtn = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const btnRef = useRef(null);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      style={{ display: scrollPosition <= 100 ? "none" : "block" }}
      id="move-top-btn"
      onClick={scrollToTop}
      ref={btnRef}
    >
      <p>↑</p>
      <p>TOP</p>
    </button>
  );
};

export default TopMoveBtn;
