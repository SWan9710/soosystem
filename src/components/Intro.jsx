import React from "react";
import "../styles/components/Intro.css";
import IntroImage from "../assets/고양이.png";
import IronFrame from "./IronFrame";

const Intro = () => {
  return (
    <div>
      <h1 id="title">
        대한민국 1위 파이프레이저 가공업체 수시스템㈜
        <br />
        <span id="title-2">
          수시스템은 설계부서를 별도로 운영하며 기초 3D 모델링부터 복잡한
          설계까지 가능합니다.
        </span>
      </h1>

      <IronFrame />

      <h2 id="main-section-title">금속교육재료사업</h2>
      <div className="main-section1">
        <div className="image-box">
          <img src={IntroImage} alt="dd" />
          <p>설명 1</p>
        </div>
        <div className="image-box">
          <img src={IntroImage} alt="dd" />
          <p>설명 1</p>
        </div>
        <div className="image-box">
          <img src={IntroImage} alt="dd" />
          <p>설명 1</p>
        </div>
        <div className="image-box">
          <img src={IntroImage} alt="dd" />
          <p>설명 1</p>
        </div>
      </div>

      <div className="main-section3">기술교육원 소개</div>
      <div className="main-section3">작업환경개선 사업</div>
    </div>
  );
};

export default Intro;
