import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackgroundImage from "../../components/BackgroundImage";
import plantImage from "../../assets/고양이.png";
import useScrollTo from "../../hooks/useScrollTo";

import "../../styles/pages/Plant/PlantPerformance.css";

const PlantPerformance = () => {
  useScrollTo(200, 100);
  const Title = "SOOSYSTEM";
  return (
    <div>
      <Header />
      <BackgroundImage image={plantImage} title={Title} />
      <section className="performance"></section>
      <Footer />
    </div>
  );
};

export default PlantPerformance;
