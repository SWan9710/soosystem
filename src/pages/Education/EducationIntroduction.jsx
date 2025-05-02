import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useScrollTop from "../../hooks/useScrollTop";
import eduImage from "../../assets/edulogo/sub0201_img01.jpg";
import eduChartImage from "../../assets/edulogo/eduChart.png";
import { AcademyLogo, SchoolLogo } from "../../constants/logos";
import LogoCarousel from "./../../components/LogoCarousel";
import worldSkillsLogo from "../../assets/edulogo/worldskills.jpg";

import "../../styles/pages/Education/EducationIntroduction.css";

const EducationIntroduction = () => {
  useScrollTop(0, 0);
  return (
    <div>
      <Header />

      <section className="education">
        <div className="education-wrap">
          <h1 className="education-title">사업소개</h1>
        </div>

        <div className="education-description-wrap">
          <div className="education-description-titles">
            <h1>금속교육 재료사업</h1>
            <h4>대한민국 대표 기술교육재료 제조업체</h4>
          </div>
          <div className="education-description-top">
            <h1>사업소개</h1>
            <div className="education-description-top-box">
              <p>국제기능올림픽대회 공식후원사</p>
              <a
                href="https://meister.hrdkorea.or.kr/eng/main.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="worlds-skills-logo"
                  src={worldSkillsLogo}
                  alt="worlds-skills-logo"
                />
              </a>
            </div>
          </div>

          <section className="education-description-second">
            <h1 className="education-subtitle">기술교육 재료사업</h1>
            <img className="edu-image" src={eduImage} alt="edu-image" />
            <div className="education-description-box">
              <p>
                수시스템은 산업에 종사하는 기능인이 자신의 기술과 기능을 가정과
                국가에서 인정받고 우대받는 사회문화가 되길 바라며 먼저 노력하는
                기업이 되겠습니다.
              </p>
              <p>
                기술기능교육에 꼭 필요한 기술교육재료를 제조하는 대한민국
                대표업체로서 선생님의 경험과 노력에 귀 기울이며 교육생의
                기술발전에 수시스템은 책임과 의무를 가지고 착한 가격에 최고의
                품질의 기술교육재료를 개발 및 제조 공급하겠습니다.
              </p>
              <ul>
                <li>밀링, 선반용 규격소재</li>
                <li>모든 용접시험 연습, 대회용 재료</li>
                <li>철판, 파이프, 평철, 빔, 앵글, 환봉 등 철강금속재료 판매</li>
                <li>
                  CNC, 레이저, MCT, NC선반, 절단 / 절곡, 용접제관, 홀, 탭, 절삭,
                  면삭 가공
                </li>
                <li>2D, 3D, CAD설계, 제작</li>
                <li>다양한 상품디자인 개발</li>
              </ul>
            </div>
          </section>

          <section className="education-description-third">
            <h1 className="education-subtitle">사업영역</h1>
            <img src={eduChartImage} alt="" />
          </section>

          <section className="education-description-forth">
            <h1 className="education-subtitle">주요고객사</h1>
            <p className="edu-forth-description">
              수시스템의 기술교육재료는{" "}
              <span>전국 고등학교(약 200곳)와 기술학원(약 57곳)에 납품</span>
              되고 있으며,{" "}
              <span>
                국내 기술교육재료시장 점유율 1위로 전국기능경기대회 시험재료로
                사용
              </span>
              되고 있습니다.
            </p>
          </section>

          <section className="education-description-slider-wrap">
            <h1 className="education-subtitle">학교 교육자재 납품</h1>
            <LogoCarousel logoList={SchoolLogo} />
          </section>

          <section className="education-description-slider-wrap">
            <h1 className="education-subtitle">학교 교육자재 납품</h1>
            <LogoCarousel logoList={AcademyLogo} />
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EducationIntroduction;
