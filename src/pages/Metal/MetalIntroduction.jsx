import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "../../styles/pages/Metal/MetalIntroduction.css";
import useScrollTo from "../../hooks/useScrollTo";

const MetalIntroduction = () => {
  useScrollTo(0, 0);
  return (
    <div>
      <Header />
      <section className="metal">
        <div className="metal-wrap">
          <h1 className="metal-title">사업소개</h1>
        </div>

        <div className="metal-description-wrap">
          <h1 className="metal-description-title">
            대충 금속가공사업 이런 사업
          </h1>
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

export default MetalIntroduction;
