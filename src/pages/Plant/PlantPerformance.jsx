import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackgroundImage from "../../components/BackgroundImage";
import plantImage from "../../assets/고양이.png";
import BackgroundColor from "./../../components/BackgroundColor";
import useScrollTo from "../../hooks/useScrollTo";
import cat from "../../assets/고양이.png";
import cat2 from "../../assets/고양이2.png";
import ImageSlider from "../../components/ImageSlider";

import "../../styles/pages/Plant/PlantPerformance.css";

const PlantPerformance = () => {
  useScrollTo(0, 0);
  const titles = ["고양이 1", "고양이 2", "고양이 3", "고양이 4", "고양이 5"];
  const images = [cat, cat2, cat, cat, cat];

  return (
    <div>
      <Header />
      {/* <BackgroundImage image={plantImage} title={Title} /> */}
      <BackgroundColor />
      <section className="plant-performance">
        <ImageSlider titles={titles} images={images} />
      </section>
      <Footer />
    </div>
  );
};

export default PlantPerformance;
