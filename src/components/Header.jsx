import React, { useState, useRef, useEffect } from "react";
import "../styles/components/Header.css";
import { Link, useLocation } from "react-router-dom";

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
        <img
          src="http://www.soosystem.com/theme/basic/img/logo.png"
          alt="header-image"
        />
      </a>

      {/* 네브바 부분 */}
      <nav
        className="nav-container"
        onMouseEnter={() => setIsMouseHovered(true)}
      >
        <ul className="menu-wrap">
          <li className="menu-title">
            <Link
              to="/about/history"
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
                <a href="/about/story">브랜드스토리</a>
              </li>
              <li>
                <a href="/about/organization">조직도</a>
              </li>
              <li>
                <a href="/about/certificate">보유인증서</a>
              </li>
              <li>
                <a href="/about/factory_location">공장위치</a>
              </li>
              <li>
                <a href="/about/location">오시는길</a>
              </li>
            </ul>
          </li>

          <li className="menu-title">
            <a href="">철골플랜트</a>
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
            <a href="">금속교육재료사업</a>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              {" "}
              <li>사업소개</li>
              <li>실적</li>
              <li>납품 실적 현황</li>
            </ul>
          </li>

          <li className="menu-title">
            <a href="">기술교육원</a>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              {" "}
              <li>사업소개</li>
              <li>실적</li>
              <li>물류자동화</li>
              <li>자재보관</li>
            </ul>
          </li>

          <li className="menu-title">
            <a href="">환경개선사업</a>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              {" "}
              <li>사업소개</li>
              <li>실적</li>
              <li>물류자동화</li>
              <li>자재보관</li>
            </ul>
          </li>

          <li className="menu-title">
            <a href="">보유장비현황</a>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              {" "}
              <li>사업소개</li>
              <li>실적</li>
              <li>물류자동화</li>
              <li>자재보관</li>
            </ul>
          </li>

          <li className="menu-title">
            <a href="">대리점</a>
            <ul
              className="menu-list-wrap"
              style={{ maxHeight: isMouseHovered ? "400px" : "0" }}
            >
              {" "}
              <li>충남 서천</li>
              <li>동부 지사</li>
              <li>서부 지사</li>
              <li>본사</li>
              <li>사천 공장</li>
              <li>인천대리점</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
