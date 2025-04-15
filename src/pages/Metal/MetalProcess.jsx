import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackgroundColor from "../../components/BackgroundColor";
import useScrollTo from "../../hooks/useScrollTo";

import "../../styles/pages/Metal/MetalProcess.css";

const MetalProcess = () => {
  useScrollTo(50, 100);
  return (
    <div>
      <Header />
      <BackgroundColor />
      <section className="metal-process">
        아직 자세한 설명이 없었음 참고 자료도 부족
      </section>
      <Footer />
    </div>
  );
};

export default MetalProcess;
