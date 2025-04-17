import React from "react";
import logo from "../assets/수시스템2.png";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <nav className="footer-logo">
        <a className="logo" href="/">
          <img src={logo} alt="header-image" />
        </a>
      </nav>
      <p className="footer-description">
        <span>TEL. 055-762-0344</span>
        <span id="contour"> | </span>
        <span>FAX. 0505-662-0344</span>
        <span id="contour"> | </span>
        <span>E-mail : SST01@soosystem.com</span>
        <span id="contour"> | </span>
        <span>tviman@naver.com</span>
        <span id="contour"> | </span>
        <span>진주본사 : 경상남도 진주시 사봉면 산업단지로 110</span>
        <span id="contour"> | </span>
        <span>사천공장 : 경상남도 사천시 용현면 진삼로 840</span>
      </p>
    </footer>
  );
};

export default Footer;
