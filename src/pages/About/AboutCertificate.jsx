import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackgroundImage from "../../components/BackgroundImage";
import BackgroundColor from "./../../components/BackgroundColor";
import aboutImage from "../../assets/고양이2.png";
import useScrollTo from "../../hooks/useScrollTo";
import CertificateContainer from "../../components/CertificateContainer";
import Logo from "../../assets/수시스템_영어2.png";

import {
  certificates,
  registrations,
  commendations,
} from "../../constants/certificates";

import "../../styles/pages/About/AboutCertificate.css";

const AboutCertificate = () => {
  useScrollTo(200, 100);
  const Title = "SOOSYSTEM";

  return (
    <div>
      <Header />
      {/* <BackgroundImage image={aboutImage} title={Title} /> */}
      <BackgroundColor title={Title} />
      <section className="certificate">
        <img src={Logo} alt="" />
        <div className="certificate-container">
          <h1 className="certificate-title">등록증</h1>
          <h2 className="certificate-english-title">
            <span>REGISTRATION</span> LIST
          </h2>
          <CertificateContainer certificates={registrations} />
        </div>
        <div className="certificate-container">
          <h1 className="certificate-title">인증서</h1>
          <h2 className="certificate-english-title">
            <span>CERTIFICATE</span> LIST
          </h2>
          <CertificateContainer certificates={certificates} />
        </div>
        <div className="certificate-container">
          <h1 className="certificate-title">표창장</h1>
          <h2 className="certificate-english-title">
            <span>COMMENDATIONS</span> LIST
          </h2>
          <CertificateContainer certificates={commendations} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutCertificate;
