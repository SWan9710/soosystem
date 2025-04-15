import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackgroundColor from "../../components/BackgroundColor";
import useScrollTo from "../../hooks/useScrollTo";

import "../../styles/pages/Education/EducationPerformance.css";

const EducationPerformance = () => {
  useScrollTo(50, 100);
  return (
    <div>
      <Header />
      <BackgroundColor />
      <section className="education-performance">
        기능올림픽 공식 후원 부분 설명
        <br /> 학교 후원 하는곳 대충 이미지 뽑은거 보여주기
        <br />
        학원도 동일
        <br />
        기존의 방식처럼 슬라이드로 넘어가는 형태로 할지 혹은 전체 이미지 다
        보여주는 방식으로 할지 선택
        <br /> 전체 이미지는 200개로 많아서 이전 사이트에서 뽑은 이미지 위주로
        대강 보여주기
      </section>
      <Footer />
    </div>
  );
};

export default EducationPerformance;
