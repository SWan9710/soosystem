import React, { useEffect } from "react";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import aboutImage from "../assets/고양이2.png";

import "../styles/pages/AboutHistory.css";
const AboutHistory = () => {
  const Title = "SOOSYSTEM";

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about">
      <Header />
      <BackgroundImage image={aboutImage} title={Title} />
    </div>
  );
};

export default AboutHistory;
