import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MetalProcess from "../../assets/metal/metalprocess.png";

import "../../styles/pages/Metal/MetalIntroduction.css";
import useScrollTo from "../../hooks/useScrollTo";

const MetalIntroduction = () => {
  // useScrollTo(0, 0);
  return (
    <div>
      <Header />
      <section className="metal">
        <div className="metal-wrap">
          <h1 className="metal-title">사업소개</h1>
        </div>

        <div className="metal-description-wrap">
          <h1 className="metal-description-title">공정소개</h1>
          <img
            src={MetalProcess}
            alt="metal-process-image"
            className="metal-process-image"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MetalIntroduction;
