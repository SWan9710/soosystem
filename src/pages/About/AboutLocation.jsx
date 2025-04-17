import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackgroundImage from "../../components/BackgroundImage";
import BackgroundColor from "./../../components/BackgroundColor";
import aboutImage from "../../assets/고양이2.png";
import useScrollTo from "../../hooks/useScrollTo";
import "../../styles/pages/About/AboutLocation.css";

const AboutLocation = () => {
  useScrollTo(0, 0);
  const mapRef = useRef(null);
  const lat = 35.187558964135725;
  const lng = 128.28203226113249;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_API_KEY}`;
    script.async = true;
    script.onload = () => {
      const { naver } = window;
      const HOME_PATH = window.HOME_PATH || ".";
      const location = new naver.maps.LatLng(lat, lng);
      const mapOptions = {
        center: location,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
      };
      const map = new naver.maps.Map("map", mapOptions);

      const markerOptions = {
        position: location,
        map: map,
        icon: HOME_PATH + "../assets/수시스템2.png",
        size: new naver.maps.Size(50, 52),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26),
      };
      const marker = new naver.maps.Marker(markerOptions);
    };
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Header />
      {/* <BackgroundImage image={aboutImage} title={Title} /> */}
      <BackgroundColor />
      <section className="location">
        <h1 className="location-title">본사</h1>
        <div className="location-information">
          <p>주소 : 경상남도 진주시 사봉면 산업단지로 110</p>
          <p>|</p>
          <p>TEL : 055-762-0344</p>
          <p>|</p>
          <p>FAX : 0505-662-0344</p>
        </div>
        <div className="map" id="map" ref={mapRef}></div>

        {/* <h1 className="location-title">사천공장</h1>
        <div className="map"></div> */}
      </section>
      <Footer />
    </div>
  );
};

export default AboutLocation;
