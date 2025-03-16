import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useScrollTop from "../../hooks/useScrollTop";
import "../../styles/pages/Plant/PlantIntroduction.css";

const PlantIntroduction = () => {
  useScrollTop(0, 0);
  return (
    <div>
      <Header />
      <section className="plant">
        <div className="plant-wrap">
          <h1 className="plant-title">사업소개</h1>
          <p>인류와 환경을 생각하는 생활과학 기업 수시스템</p>
        </div>

        <div className="plant-description-wrap">
          <h1 className="plant-description-title">대충 이런 사업</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea
            expedita delectus fuga? Quaerat laborum, nulla enim rem assumenda
            iure sequi iusto repellat dolores pariatur perspiciatis amet
            quibusdam. Eaque, deserunt.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PlantIntroduction;
