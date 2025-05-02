import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CEOImage from "../../assets/고양이.png";
import CEOSign from "../../assets/고양이2.png";
import useScrollTop from "../../hooks/useScrollTop";
import symbol1 from "../../assets/symbol1.png";
import symbol2 from "../../assets/symbol2.png";
import symbol3 from "../../assets/symbol3.png";
import symbol4 from "../../assets/symbol4.png";

import "../../styles/pages/About/AboutIntroduction.css";

const AboutIntroduction = () => {
  useScrollTop(0, 0);
  return (
    <div className="introduction">
      <Header />
      <section className="introduction-section">
        <div className="section-description">
          <h1>
            머리엔 지혜, 얼굴은 웃음 <br />
            가슴에 사랑, 양손엔 일감
            <br />
          </h1>

          <div className="section-description-top">
            <h2>Soo System</h2>
            <p>
              은 소량 다품종 설비 구축을 통한 다양성 확보 및
              <span>"설계 - 가공 - 제작"</span> 원스톱 공정으로 <br />
              고객만족을 넘어 고객감동 추구를 통하여 세계 일류기업으로 성장하기
              위해 노력합니다.
            </p>
          </div>

          <p className="section-quality">
            고객에 대한 무한책임을 바탕으로 고객감동의 서비스정신과 효율적인
            품질관리를 통하여 이익을 추구하고, 사회에 이익을 환원하여 사회발전을
            도모합니다.
          </p>
        </div>
      </section>

      <section className="introduction-brandstory">
        <h1 className="introduction-brandstory-title">브랜드 스토리</h1>
        <div className="introduction-brandstory-wrap">
          <h2 className="introduction-brandstory-subtitle">브랜드 스토리</h2>

          <div className="introduction-brandstory-top">
            <h4>Human interface</h4>
            <h4>사람을 잇는 기술</h4>

            <div className="brandstory-box">
              <p>
                수시스템㈜는 1993년 컴퓨터 H/W수리, 개발업무로 시작하여 방송,
                통신, 전기, 전자분야의 사업을 시작하여,2010년부터 금속철강
                산업분야로 사업중심을 전환하였으며, 소량 다품종 설비를 구축하여
                현대중공업,두산중공업, 대우조선해양 등에 금속가공 2차
                협력업체로서 발전하였습니다.
              </p>
              <p>
                2015년부터는 위 경험을 바탕으로 금속교육재료를 직접제조, 생산,
                판매하고 있으며 다양한 금속교육재료를 한국산업인력공단, 전국의
                공업교육계 기관에 일괄적으로 공급하는 금속교육재료 세계 1위
                전문기업으로 성장했습니다.
              </p>
              <p>
                2024년 조선해양, 육상플랜트사업쪽으로 사업을 확장하여 형강
                파이프레이저 장비 설비구축 및 제작부지 확보 등 철의장 및
                대형구조물 제작이 가능한 설비를 갖추었습니다. 또한 기초 3D
                모델링부터 복잡한 설계도면분석이 가능한 설계부를 자체적으로
                운영하며 경쟁력을 확보하고, 한번의 발주로 설계-가공-제작까지
                원스톱으로 진행이 되는 대한민국 1위 형강 파이프레이저 가공기업이
                되었습니다.
              </p>
              <p>
                함께 발전하고 항상 연구하며 사람과 사람을, 사람과 기업을, 사람과
                미래를 이어주는 진화하는 기업이 되고자 노력하겠습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="introduction-CI-wrap">
          <h1 className="introduction-CI-subtitle">CI</h1>

          <div className="introduction-CI-top">
            <h4 className="CI-title">디자인 컨셉</h4>
            <p className="CI-subtitle">
              <span className="sub-1">수시스템 청색</span>과{" "}
              <span className="sub-2">무채색인 수시스템 실버</span>를 대비시켜
              전반적으로 스피드를 나타내고,
              <span className="sub-3">기업의 모티브인 광속을 표현</span>하고
              있습니다.
            </p>

            <div className="CI-box">
              <div className="symbol-box">
                <img src={symbol1} alt="symbol-red" className="symbol-red" />
                <div>
                  <p>
                    궤도를 가진 물리의 전자(electron)를 형상화한 불빛은
                    혜성으로써{" "}
                    <span className="sub-1">
                      전자통신 분야의 제조 업체로써 <br /> 큰 획을 그을
                      혜성(신성, 新星)같은 기업이라는 의미
                    </span>
                    를 가지고 있습니다.
                  </p>

                  <p>
                    <span className="sub-1">
                      네트워크를 의미하는 원을 응용하여 타원을 제작하였고,
                      초고속 정보 전달을 나타냅니다.
                    </span>
                    <br />이 곡선과 혜성은 광(Optical) 통신 분야를 간접적으로
                    표현하기도 합니다. 또한, <br />
                    <span className="sub-3">
                      아래에서 선회하여 위로 이동하는 혜성의 궤도는
                      수시스템(주)의 빠른 성장을 의미하고, 미래 지향 기업임을
                      선언 합니다.
                    </span>
                  </p>

                  <p className="sub-1">
                    6개의 혜성 빛살은 장차 기업을 이끌어갈 패러다임을 각
                    분야별로 상징합니다.
                  </p>
                </div>
              </div>
              <div className="symbol-box">
                <img src={symbol2} alt="symbol-blue" className="symbol-blue" />
                <div>
                  <p>
                    <span className="sub-1">
                      수시스템 청색은 확장하는 칼라로써 커가는 젊은 벤처기업
                    </span>
                    을 나타냅니다.
                  </p>
                  <p>
                    <span className="sub-3">
                      수시스템 적색은 기업의 정열과 변화의 힘(혁신,
                      innovation)을 색으로 표현. 회사의 에너지를 나타내며,
                      <br /> 친환경 에너지인 태양열 발전을 상징
                    </span>
                    하기도 합니다.
                  </p>
                </div>
              </div>
              <div className="symbol-box" id="symbol-box-silver">
                <img
                  src={symbol3}
                  alt="symbol-silver"
                  className="symbol-silver"
                />
                <p>
                  <span className="sub-2">
                    수시스템 실버는 수시스템 청색과 대비되어 차갑고 지성적이며
                    미래 지향적인 배색이며 인재, 구성원, 회사 등 시스템을 의미
                  </span>
                  합니다.
                </p>
              </div>
            </div>
            <div>
              <h4 className="CI-title">상호의 의미</h4>
              <p className="CI-mind">
                최고의 시스템을 보유한 기업이 되고자 하는 마음
              </p>
              <div className="CI-box">
                <div className="symbol-box" id="symbol-mean">
                  <img
                    src={symbol4}
                    alt="symbol-silver"
                    className="symbol-silver"
                  />
                  <p>
                    <span className="sub-1">한자 秀 (빼어날 수)</span> + 영문
                    SYSTEM (제도, 체계, 구성){" "}
                    <span className="sub-1">
                      으로 이루어진 한문영어 합성어 상호입니다.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="introduction-CEO">
        <h1 className="introduction-CEO-title">CEO 인사말</h1>

        <div className="CEO-wrap">
          <asid className="ceo-image">
            <img src={CEOImage} alt="ceo-image" />
          </asid>

          <article className="ceo-greetings">
            <h1>수시스템은 ~이런 기업입니다.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quia nobis, earum corrupti dolorem, aliquam odio aperiam sit nihil
              autem provident quam sapiente in recusandae perferendis
              consequuntur cumque. Nemo, suscipit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quia nobis, earum corrupti dolorem, aliquam odio aperiam sit nihil
              autem provident quam sapiente in recusandae perferendis
              consequuntur cumque. Nemo, suscipit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quia nobis, earum corrupti dolorem, aliquam odio aperiam sit nihil
              autem provident quam sapiente in recusandae perferendis
              consequuntur cumque. Nemo, suscipit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quia nobis, earum corrupti dolorem, aliquam odio aperiam sit nihil
              autem provident quam sapiente in recusandae perferendis
              consequuntur cumque. Nemo, suscipit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quia nobis, earum corrupti dolorem, aliquam odio aperiam sit nihil
              autem provident quam sapiente in recusandae perferendis
              consequuntur cumque. Nemo, suscipit.
            </p>
            <h3>
              대표이사 <br /> 오 수 관 배상
            </h3>
            {/* 또는 사인 이미지 넣어주기 */}
          </article>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutIntroduction;
