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

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

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
            <Link
              to="/about/introduction"
              className={location.pathname.includes("/about") ? "active" : ""}
            >
              회사소개
            </Link>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              <li>
                <a href="/about/history">연혁</a>
              </li>
              <li>
                <a href="/about/organization">조직도</a>
              </li>
              <li>
                <a href="/about/certificate">인증현황</a>
              </li>
              <li>
                <a href="/about/location">오시는길</a>
              </li>
            </ul>
          </li>

          <li className="menu-title">
            <a href="">플랜트사업</a>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              {" "}
              <li>사업소개</li>
              <li>실적</li>
            </ul>
          </li>
          <li className="menu-title">
            <a href="">금속가공사업</a>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              {" "}
              <li>사업소개</li>
              <li>실적</li>
              <li>공정</li>
            </ul>
          </li>

          <li className="menu-title">
            <a href="">교육재료사업</a>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              {" "}
              <li>사업소개</li>
              <li>실적</li>
              <li>납품현황</li>
            </ul>
          </li>

          <li className="menu-title">
            <a href="">기술교육원</a>
          </li>

          <li className="menu-title">
            <a href="">주요설비</a>
          </li>

          <li className="menu-title">
            <a href="">대리점</a>
          </li>

          <li className="menu-title">
            <a href="">판매사업</a>
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
