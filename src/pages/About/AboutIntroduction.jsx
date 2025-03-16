import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CEOImage from "../../assets/고양이.png";
import CEOSign from "../../assets/고양이2.png";
import useScrollTop from "../../hooks/useScrollTop";

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

      <section className="introduction-CEO">
        <aside className="introduction-image">
          <img src={CEOImage} alt="대표님 사진" />
        </aside>
        <article className="introduction-article">
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>

          <p>대표이사 : 오수관, 박선숙</p>
          <img src={CEOSign} alt="대표님 싸인" />
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default AboutIntroduction;
