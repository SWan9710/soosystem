import React, { useRef, useEffect, useState } from "react";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import aboutImage from "../assets/고양이2.png";
import useScrollTo from "../hooks/useScrollTo";
import LeftHistoryDescription from "../components/LeftHistoryDescription";
import RightHistoryDescription from "./../components/RightHistoryDescription";
import "../styles/pages/AboutHistory.css";

const AboutHistory = () => {
  const Title = "SOOSYSTEM";
  useScrollTo(200, 100);

  const MONTH_LIST = ["10월 14일", "9월 8일"];
  const DESCRIPTION_LIST = ["수완이 생일", "대호 생일"];

  // 관찰할 ref 배열로 생성
  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // 클래스네임 변경시킬 부분 순서
  const [visibleItems, setVisibleItems] = useState(
    Array(refs.length).fill(false)
  );

  useEffect(() => {
    // 옵저버 생성
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = refs.findIndex((ref) => ref.current === entry.target); // 순번에 맞는 옵저버 선택

        // 해당 옵저버가 화면에 보인 경우
        if (entry.isIntersecting) {
          setVisibleItems((prev) => {
            const newVisibleItems = [...prev];
            if (!newVisibleItems[index]) {
              newVisibleItems[index] = true; // 해당 인덱스의 가시성을 true로 설정
            }
            return newVisibleItems; // 항상 새 배열을 반환
          });
        }
      });
    });

    // 각 ref를 관찰
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // 클린업 함수로 관찰 해제
    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };

    // 의존성 배열 빈배열로 해서 한번만 실행되게 하기
  }, []);

  return (
    <div className="about">
      <Header />
      <BackgroundImage image={aboutImage} title={Title} />
      <div className="about-history-section">
        <div className="history-line-circle">
          <p>NOW</p>
          <p>~</p>
          <p>1999</p>
        </div>
        <div id="line"></div>

        {/* 각 히스토리 아이템을 개별적으로 정의 */}
        <div
          ref={refs[0]}
          className={`history-item ${visibleItems[0] ? "animate" : ""}`}
        >
          <LeftHistoryDescription
            title_year={2025}
            month={MONTH_LIST}
            description={DESCRIPTION_LIST} // 첫 번째 설명
          />
        </div>
        <div
          ref={refs[1]}
          className={`history-item ${visibleItems[1] ? "animate" : ""}`}
        >
          <RightHistoryDescription
            title_year={2025}
            month={MONTH_LIST}
            description={DESCRIPTION_LIST} // 두 번째 설명
          />
        </div>
        <div
          ref={refs[2]}
          className={`history-item ${visibleItems[2] ? "animate" : ""}`}
        >
          <LeftHistoryDescription
            title_year={2025}
            month={MONTH_LIST}
            description={DESCRIPTION_LIST} // 커스터마이즈된 설명
          />
        </div>
        <div
          ref={refs[3]}
          className={`history-item ${visibleItems[3] ? "animate" : ""}`}
        >
          <RightHistoryDescription
            title_year={2025}
            month={MONTH_LIST}
            description={DESCRIPTION_LIST} // 커스터마이즈된 설명
          />
        </div>
        <div
          ref={refs[4]}
          className={`history-item ${visibleItems[4] ? "animate" : ""}`}
        >
          <LeftHistoryDescription
            title_year={2025}
            month={MONTH_LIST}
            description={DESCRIPTION_LIST} // 커스터마이즈된 설명
          />
        </div>
        <div
          ref={refs[5]}
          className={`history-item ${visibleItems[5] ? "animate" : ""}`}
        >
          <RightHistoryDescription
            title_year={2025}
            month={MONTH_LIST}
            description={DESCRIPTION_LIST} // 커스터마이즈된 설명
          />
        </div>
        <div
          ref={refs[6]}
          className={`history-item ${visibleItems[6] ? "animate" : ""}`}
        >
          <LeftHistoryDescription
            title_year={2025}
            month={MONTH_LIST}
            description={DESCRIPTION_LIST} // 커스터마이즈된 설명
          />
        </div>
        <div
          ref={refs[7]}
          className={`history-item ${visibleItems[7] ? "animate" : ""}`}
        >
          <RightHistoryDescription
            title_year={2025}
            month={MONTH_LIST}
            description={DESCRIPTION_LIST} // 커스터마이즈된 설명
          />
        </div>
        <div
          ref={refs[8]}
          className={`history-item ${visibleItems[8] ? "animate" : ""}`}
        >
          <LeftHistoryDescription
            title_year={2025}
            month={MONTH_LIST}
            description={DESCRIPTION_LIST} // 커스터마이즈된 설명
          />
        </div>
        <div
          ref={refs[9]}
          className={`history-item ${visibleItems[9] ? "animate" : ""}`}
        >
          <RightHistoryDescription
            title_year={2025}
            month={MONTH_LIST}
            description={DESCRIPTION_LIST} // 커스터마이즈된 설명
          />
        </div>
        <div
          ref={refs[10]}
          className={`history-item ${visibleItems[10] ? "animate" : ""}`}
        >
          <LeftHistoryDescription
            title_year={2025}
            month={MONTH_LIST}
            description={DESCRIPTION_LIST} // 커스터마이즈된 설명
          />
        </div>
        <div
          ref={refs[11]}
          className={`history-item ${visibleItems[11] ? "animate" : ""}`}
        >
          <RightHistoryDescription
            title_year={2025}
            month={MONTH_LIST}
            description={DESCRIPTION_LIST} // 커스터마이즈된 설명
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;
