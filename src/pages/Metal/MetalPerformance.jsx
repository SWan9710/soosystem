import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackgroundColor from "../../components/BackgroundColor";
import useScrollTo from "../../hooks/useScrollTo";

import "../../styles/pages/Metal/MetalPerformance.css";

const MetalPerformance = () => {
  useScrollTo(50, 100);
  return (
    <div>
      <Header />
      <BackgroundColor />
      <section className="metal-performance">
        사진들 나열하고 클릭시 디테일 페이지로 이동하게 만들기
      </section>
      <Footer />
    </div>
  );
};

export default MetalPerformance;
