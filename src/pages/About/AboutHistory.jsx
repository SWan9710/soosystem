import React, { useRef, useEffect, useState } from "react";
import Header from "../../components/Header";
import BackgroundImage from "../../components/BackgroundImage";
import BackgroundColor from "./../../components/BackgroundColor";
import aboutImage from "../../assets/고양이2.png";
import useScrollTo from "../../hooks/useScrollTo";
import LeftHistoryDescription from "../../components/LeftHistoryDescription";
import RightHistoryDescription from "../../components/RightHistoryDescription";
import Footer from "../../components/Footer";
import "../../styles/pages/About/AboutHistory.css";

const AboutHistory = () => {
  useScrollTo(0, 0);

  // 관찰할 ref 배열로 생성
  const refs = [
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
      {/* <BackgroundImage image={aboutImage} title={Title} /> */}
      <BackgroundColor />
      <section className="about-history-section">
        <div className="history-line-circle">
          <p>NOW</p>
          <p>~</p>
          <p>1993</p>
        </div>

        {/* 각 히스토리 아이템을 개별적으로 정의 */}
        <div
          ref={refs[0]}
          className={`history-item ${visibleItems[0] ? "animate" : ""}`}
        >
          <LeftHistoryDescription
            title={"조선해양, 육상플랜트사업"}
            month={[2024]}
            description={[
              "형강 파이프레이저 4대 추가설비 구축",
              "삼화중공업 철의장 가공납품",
              "한화오션 대형철의장 및 특수구조물 제작",
              "LG엔솔, 카이 회전익동 구조물 제작",
            ]}
          />
        </div>
        <div
          ref={refs[1]}
          className={`history-item ${visibleItems[1] ? "animate" : ""}`}
        >
          <RightHistoryDescription
            title={"금속교육재료사업"}
            month={[2022, 2021, 2020, 2017, 2015]}
            description={[
              "국가기술자격시험 재료 공급업체 선정",
              "지방 / 전국기능경기대회 시험장재료납품 기관선정",
              "뿌리기업 인증",
              "기능경기대회 후원사협약",
              "금속교육시편 제작판매 이공계 교육기관 교육재료 공급",
            ]}
          />
        </div>
        <div
          ref={refs[2]}
          className={`history-item ${visibleItems[2] ? "animate" : ""}`}
        >
          <LeftHistoryDescription
            title={"금속가공사업"}
            month={[2012]}
            description={[
              "동양물산 (트랙터 부속 콤바인차량 프레임제작)",
              "두산중공업 (풍력발전터빈박스 소부재납품)",
              "현대중공업 (엔진블럭소부재 납품가공)",
              "대우조선 (스톰앙카,비트제작)",
            ]}
          />
        </div>
        <div
          ref={refs[3]}
          className={`history-item ${visibleItems[3] ? "animate" : ""}`}
        >
          <RightHistoryDescription
            title={"유선 및 방송장비사업"}
            month={["1995. 12", "1999. 06"]}
            description={["진삼유선방송 설립", "법인회사로 전환"]} // 커스터마이즈된 설명
          />
        </div>
        <div
          ref={refs[4]}
          className={`history-item ${visibleItems[4] ? "animate" : ""}`}
        >
          <LeftHistoryDescription
            title={"회사설립"}
            month={["1993. 04"]}
            description={["수시스템 설립"]} // 커스터마이즈된 설명
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutHistory;
