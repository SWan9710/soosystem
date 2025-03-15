import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundImage from "../components/BackgroundImage";
import aboutImage from "../assets/고양이2.png";
import useScrollTo from "../hooks/useScrollTo";
import "../styles/pages/AboutCertificate.css";

const AboutCertificate = () => {
  useScrollTo(200, 100);
  const Title = "SOOSYSTEM";
  return (
    <div>
      <Header />
      <BackgroundImage image={aboutImage} title={Title} />
      <section></section>
      <Footer />
    </div>
  );
};

export default AboutCertificate;
