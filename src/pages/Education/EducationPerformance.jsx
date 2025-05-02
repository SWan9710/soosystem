import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackgroundColor from "../../components/BackgroundColor";
import useScrollTo from "../../hooks/useScrollTo";
import { TopSellerList } from "../../constants/products";

import "../../styles/pages/Education/EducationPerformance.css";

const EducationPerformance = () => {
  useScrollTo(0, 0);
  return (
    <div>
      <Header />
      <BackgroundColor />
      <section className="education-performance">
        <h1 className="education-production-title">제품소개</h1>
        <ul className="education-products">
          {TopSellerList.map((info, index) => (
            <a
              href="https://www.sipnara.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li key={`topseller-${index}`} className="products-item">
                <img src={info.img} alt="" />
                <h1>{info.title}</h1>
              </li>
            </a>
          ))}
        </ul>
        <button
          className="sipnara-btn"
          onClick={() =>
            window.open(
              "https://www.sipnara.com/",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          시편나라 바로가기
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default EducationPerformance;
