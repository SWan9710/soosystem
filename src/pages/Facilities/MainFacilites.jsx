import React from "react";
import Header from "./../../components/Header";
import BackgroundColor from "./../../components/BackgroundColor";
import Footer from "./../../components/Footer";
import useScrollTo from "./../../hooks/useScrollTo";
import Logo from "../../assets/수시스템_영어2.png";

// ------- 장비 사진 url -------
import MainFacilities1 from "../../assets/facilities/형강레이저12kw 12M 520파이.jpg";
import MainFacilities2 from "../../assets/facilities/형강레이저 3kw 6M 230파이.jpg";
import MainFacilities3 from "../../assets/facilities/형강레이저 20KW 26M 1250mm 3D 5축 절단기.png";
import MainFacilities4 from "../../assets/facilities/평판 파이버레이저 4kw 1500x3000 - 트랜스장비.jpg";
import MainFacilities5 from "../../assets/facilities/평판 파이버레이저 10kw 2500x6000.jpg";
import MainFacilities6 from "../../assets/facilities/형강레이저 12KW 12M 520파이 - 작업설명서.png";
import MainFacilities7 from "../../assets/facilities/형강레이저 6kw 10M 280 사각척.jpg";

import FacilitiesContainer from "../../components/FacilitiesContainer";

import "../../styles/pages/Facilities/MainFacilites.css";

const MainFacilites = () => {
  useScrollTo(0, 0);

  const images = [
    MainFacilities1,
    MainFacilities2,
    MainFacilities3,
    MainFacilities4,
    MainFacilities5,
    MainFacilities6,
    MainFacilities7,
  ];

  const titles = [
    "형강레이저12kw 12M 520파이",
    "형강레이저3kw 10M 230파이",
    "형강레이저 20KW 26M 1250mm 3D 5축 절단기",
    "평판 파이버레이저 4kw 1500x3000 + 트랜스장비",
    "평판 파이버레이저 10kw 2500x6000",
    "형강레이저12kw 12M 520파이 작업능력",
    "형강레이저 6kw 10M 280 사각척",
  ];

  const descriptions = [
    [
      "국내 최대 절단사이즈 520파이 파이프 가공가능",
      "12M 원본 절단가능으로 자재절감효과 높음",
      "높은 출력과 바벨기능 탐재로 공정간소화 가능",
    ],
    [
      "520파이 4척 장비에 비해 2척으로 속도가 빠르고 생산성이 높음",
      "앵글 / 잔넬 / 빔 / 파이프 등 비교적 작은 사이즈의 형강 절단에 최적화",
    ],
    [
      "자재 로딩 / 언로딩 과정을 자동화로 진행해 작업시간 단축 및 정확성이 높음",
    ],
    ["3kw 장비보다 높은 출력 및 사각척으로 형강 가공범위 확장"],
  ];
  return (
    <div>
      <Header />
      <BackgroundColor />
      <section className="facilities-wrap">
        <img src={Logo} alt="" />
        <h1 className="facilities-title">장비현황</h1>
        <FacilitiesContainer
          image={images[0]}
          title={titles[0]}
          descriptions={descriptions[0]}
        />
        <FacilitiesContainer image={images[5]} title={titles[5]} />
        <FacilitiesContainer
          image={images[1]}
          title={titles[1]}
          descriptions={descriptions[1]}
        />
        <FacilitiesContainer
          image={images[6]}
          title={titles[6]}
          descriptions={descriptions[3]}
        />
        <FacilitiesContainer image={images[2]} title={titles[2]} />
        <FacilitiesContainer
          image={images[3]}
          title={titles[3]}
          descriptions={descriptions[2]}
        />
        <FacilitiesContainer image={images[4]} title={titles[4]} />
      </section>
      <Footer />
    </div>
  );
};

export default MainFacilites;
