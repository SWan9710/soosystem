import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackgroundImage from "../../components/BackgroundImage";
import BackgroundColor from "../../components/BackgroundColor";
import aboutImage from "../../assets/고양이2.png";
import useScrollTo from "../../hooks/useScrollTo";
import OrgLogo from "../../assets/수시스템_영어2.png";
import "../../styles/pages/About/AboutOrganization.css";

const AboutOrganization = () => {
  useScrollTo(0, 0);
  return (
    <div>
      <Header />
      {/* <BackgroundImage image={aboutImage} title={Title} /> */}
      <BackgroundColor />
      <section className="org-wrap">
        <h1 id="title">
          ORGANIZATION <span>CHART</span>
        </h1>

        <div className="org-logo">
          <img src={OrgLogo} alt="" />
        </div>

        <div className="org-CEO">
          <h3>대표이사</h3>
          <div className="org-top-team">
            <div>안전관리팀</div>
            <div className="CEO-line"></div>
            <div>기술연구소</div>
          </div>
        </div>
        <div className="line-1"></div>
        <div className="line-wrap">
          <div className="line-3"></div>
          <div className="line-3"></div>
          <div className="line-3"></div>
          <div className="line-2"></div>
        </div>
        <div className="org-team">
          <ul className="org-team-wrap">
            <li className="bubusiness-team">
              <p>사업부</p>
              <div className="line-4"></div>
              <ul>
                <li>플랜트 사업팀</li>
                <div className="line-5"></div>
                <li>금속가공 사업팀</li>
                <div className="line-5"></div>
                <li>교육재료 사업팀</li>
              </ul>
            </li>
            <li className="sales-team">
              <p>창조기획 영업팀</p>
            </li>
            <li className="production-team">
              <p>생산관리팀</p>
              <div className="line-4"></div>
              <ul>
                <li>고객대응</li>
                <div className="line-5"></div>
                <li>공정관리</li>
                <div className="line-5"></div>
                <li>리드타임 관리</li>
              </ul>
            </li>
            <li className="quality-team">
              <p>품질관리팀</p>
              <div className="line-4"></div>
              <ul>
                <li>제품검사</li>
                <div className="line-5"></div>
                <li>품질관리</li>
                <div className="line-5"></div>
                <li>품질보증</li>
              </ul>
            </li>
            <li className="management-team">
              <p>관리팀</p>
              <div className="line-4"></div>
              <ul>
                <li>인사, 노무</li>
                <div className="line-5"></div>
                <li>경리, 총무</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutOrganization;
