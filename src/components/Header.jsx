import React, { useState, useRef, useEffect } from "react";
import "../styles/components/Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/수시스템2.png";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMouseHovered, setIsMouseHovered] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // 헤더 배경색 변경을 위해 스크롤 위치 감지하는 함수
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  // 페이지 마운트 시 setTimeout을 이용해 스크롤 포지션 계산
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);

    setTimeout(updateScroll, 200);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [location]);

  return (
    <header
      className={`header ${scrollPosition <= 100 ? "" : "change"} ${
        isMouseHovered ? "menu-open" : ""
      }`}
      ref={navRef}
      onMouseLeave={() => setIsMouseHovered(false)}
    >
      {/* 로고 부분 */}
      <a className="logo" href="/">
        <img src={logo} alt="header-image" />
      </a>

      {/* 네브바 부분 */}
      <nav
        className="nav-container"
        onMouseEnter={() => setIsMouseHovered(true)}
      >
        <ul className="menu-wrap">
          <li className="menu-title">
            <Link to="/about/introduction">회사소개</Link>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              <li>
                <Link to="/about/history">연혁</Link>
              </li>
              <li>
                <Link to="/about/organization">조직도</Link>
              </li>
              <li>
                <Link to="/about/certificate">인증현황</Link>
              </li>
              <li>
                <Link to="/about/location">오시는길</Link>
              </li>
            </ul>
          </li>

          <li className="menu-title">
            <Link to="/plant/introduction">플랜트사업</Link>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              <li>
                <Link to="/plant/introduction">사업소개</Link>
              </li>
              <li>
                <Link to="/plant/performance">실적</Link>
              </li>
            </ul>
          </li>
          <li className="menu-title">
            <Link to="/metal/introduction">금속가공사업</Link>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              {" "}
              <li>
                <Link to="/metal/introduction">사업소개</Link>
              </li>
              <li>
                <Link to="/metal/performance">실적</Link>
              </li>
              <li>
                <Link to="/metal/process">공정</Link>
              </li>
            </ul>
          </li>

          <li className="menu-title">
            <Link to="/education/introduction">교육재료사업</Link>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              {" "}
              <li>
                <Link to="/education/introduction">사업소개</Link>
              </li>
              <li>
                <Link to="/education/performance">실적</Link>
              </li>
              <li>
                <Link to="/education/delivery">납품현황</Link>
              </li>
            </ul>
          </li>

          <li className="menu-title">
            <Link to="http://soots.co.kr/" target="_blank">
              기술교육원
            </Link>
          </li>

          <li className="menu-title">
            <Link to="">주요설비</Link>
          </li>

          <li className="menu-title">
            <Link to="">대리점</Link>
          </li>

          <li className="menu-title">
            <Link to="">판매사업</Link>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              {" "}
              <li>JQ레이저</li>
              <li>이동대차</li>
              <li>자재적재대</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
