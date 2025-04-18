import React from "react";
import Header from "./../../components/Header";
import BackgroundColor from "./../../components/BackgroundColor";
import Footer from "./../../components/Footer";
import useScrollTo from "./../../hooks/useScrollTo";
import Logo from "../../assets/수시스템_영어2.png";
import InfiniteCarousel from "./../../components/InfiniteCarousel";
import FacilitiesContainer from "../../components/FacilitiesContainer";
import { MainFacilities, OtherFacilities } from "../../constants/facilities";
import hoist from "../../assets/facilities/호이스트.png";
import forklift from "../../assets/facilities/지게차.jpg";

import "../../styles/pages/Facilities/MainFacilites.css";

const MainFacilites = () => {
  useScrollTo(0, 0);

  return (
    <div>
      <Header />
      <BackgroundColor />
      <section className="facilities-wrap">
        <img src={Logo} alt="" />
        <h1 className="facilities-title">장비 현황</h1>
        <h1 className="facility-title">주요 장비 현황</h1>
        <InfiniteCarousel carouselList={MainFacilities} />
        <h1 className="facility-title">기타 장비 현황</h1>
        <FacilitiesContainer facilities={OtherFacilities} />
        <div className="hoist-forklift-wrap">
          <div className="hoist-wrap">
            <img id="hoist" src={hoist} alt="호이스트" />
            <h1 className="hoist-forklift-title">호이스트</h1>
          </div>
          <div className="hoist-forklift-count">
            <div className="hoist-forklift-grid">
              <h4>호이스트 현황</h4>
              <div className="count">
                <p>30톤</p>
                <p>5개</p>
                <p>20톤</p>
                <p>1개</p>
                <p>10톤</p>
                <p>2개</p>
                <p>7.5톤</p>
                <p>1개</p>
                <p>5톤</p>
                <p>7개</p>
                <p>3톤</p>
                <p>4개</p>
              </div>
            </div>
            <div className="hoist-forklift-grid">
              <div className="count">
                <p>7.5톤</p>
                <p>1대</p>
                <p>5톤</p>
                <p>1대</p>
                <p>3.5톤</p>
                <p>1대</p>
                <p>2.5톤</p>
                <p>1대</p>
                <p>2톤</p>
                <p>1대</p>
                <p>1.8톤</p>
                <p>2대</p>
              </div>
              <h4>지게차 현황</h4>
            </div>
          </div>
          <div className="forklift-wrap">
            <img id="forklift" src={forklift} alt="지게차" />
            <h1 className="hoist-forklift-title">지게차</h1>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MainFacilites;
