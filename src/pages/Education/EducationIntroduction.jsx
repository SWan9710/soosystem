import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "../../styles/pages/Education/EducationIntroduction.css";

const EducationIntroduction = () => {
  return (
    <div>
      <Header />

      <section className="education">
        <div className="education-wrap">
          <h1 className="education-title">사업소개</h1>
        </div>

        <div className="education-description-wrap">
          <div className="education-description-title-wrap">
            <h1 className="edu-title">금속교육 재료사업</h1>
            <h4 className="edu-subtitle">
              대한민국 대표 기술교육재료 제조업체, 기능올림픽 공식 후원사
            </h4>
          </div>
          <p>
            수시스템은 산업에 종사하는 기능인이 자신의 기술과 기능을 가정과
            국가에서 인정받고 우대받는 사회문화가 되길 바라며 먼저 노력하는
            기업입니다.
          </p>
          기술기능교육에 꼭 필요한 기술교육재료를 제조하는 대한민국 대표업체로서
          선생님의 경험과 노력에 귀 기울이며 교육생의 기술발전에 수시스템은
          책임과 의무를 가지고 착한 가격에 최고의 품질의 기술교육재료를 개발 및
          제조 공급하겠습니다.
          <p></p>
          <p className="education-deesciption">
            수시스템의 기술교육재료는{" "}
            <span>전국 고등학교(약 200곳)와 기술학원(약 57곳)에 납품</span>되고
            있으며, <span>국내 기술교육재료시장 점유율 1위</span>로
            <span>전국기능경기대회 시험재료로 사용</span>되고 있습니다.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EducationIntroduction;
