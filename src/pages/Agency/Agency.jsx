import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackgroundColor from "../../components/BackgroundColor";
import useScrollTo from "../../hooks/useScrollTo";
import AgencyLocation from "../../components/AgencyLocation";

import "../../styles/pages/Agency/Agency.css";

const Agency = () => {
  useScrollTo(0, 0);
  const [selected, setSelected] = useState("포항공장");

  const handleSelect = (location) => {
    setSelected(location);
  };

  return (
    <div>
      <Header />
      <BackgroundColor />
      <section className="agency">
        <h1 className="agency-title">대리점 현황</h1>
        <ul className="agency-wrap">
          {["포항공장", "서부지사", "충남서천"].map((loc) => (
            <li
              key={loc}
              onClick={() => handleSelect(loc)}
              style={{
                backgroundColor: selected === loc ? "#005c9d" : "white",
                color: selected === loc ? "white" : "black",
              }}
            >
              {loc}
            </li>
          ))}
        </ul>

        {/* 선택된 위치의 지도 표시 */}
        <AgencyLocation locationName={selected} />
      </section>
      <Footer />
    </div>
  );
};

export default Agency;
