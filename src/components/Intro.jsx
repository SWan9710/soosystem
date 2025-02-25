import React from "react";
import "../styles/components/Intro.css";
import IntroImage from "../assets/고양이.png";
import IronFrame from "./IronFrame";

const Intro = () => {
  return (
    <div>
      <h1 id="title">인류와 환경을 생각하는 생활 과학기업 주식회사 수시스템</h1>
      <p className="description">
        수시스템은 산업에 종사하는 기능인이 자신의 기술과 기능을 가정과 국가에서
        인정받고 우대받는 사회문화가 되길 바라며 먼저 노력하는 기업이
        되겠습니다.
      </p>
      <p className="description">
        기술기능교육에 꼭 필요한 기술교육재료를 제조하는 대한민국 대표업체로서
        선생님의 경험과 노력에 귀 기울이며 <br /> 교육생의 기술발전에 수시스템은
        책임과 의무를 가지고 착한 가격에 최고의 품질의 기술교육재료를 개발 및
        제조 공급하겠습니다.
      </p>

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
