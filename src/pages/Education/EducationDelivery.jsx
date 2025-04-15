import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackgroundColor from "../../components/BackgroundColor";
import useScrollTo from "../../hooks/useScrollTo";

import "../../styles/pages/Education/EducationDelivery.css";

const EducationDelivery = () => {
  useScrollTo(200, 100);
  const Title = "SOOSYSTEM";
  return (
    <div>
      <Header />
      <BackgroundColor title={Title} />
      <section className="education-delivery">어떤거 보여줄지.. 흠</section>
      <Footer />
    </div>
  );
};

export default EducationDelivery;
