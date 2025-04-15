import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackgroundColor from "../../components/BackgroundColor";
import useScrollTo from "../../hooks/useScrollTo";

import "../../styles/pages/Education/EducationDelivery.css";

const EducationDelivery = () => {
  useScrollTo(50, 100);
  return (
    <div>
      <Header />
      <BackgroundColor />
      <section className="education-delivery">어떤거 보여줄지.. 흠</section>
      <Footer />
    </div>
  );
};

export default EducationDelivery;
