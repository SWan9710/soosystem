import React from "react";
import useScrollTo from "../hooks/useScrollTo";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import aboutImage from "../assets/고양이2.png";

import "../styles/pages/AboutHistory.css";

const AboutStory = () => {
  const Title = "SOOSYSTEM";

  useScrollTo(300, 100);
  return (
    <div className="about">
      <Header />
      <BackgroundImage image={aboutImage} title={Title} />
    </div>
  );
};

export default AboutStory;
