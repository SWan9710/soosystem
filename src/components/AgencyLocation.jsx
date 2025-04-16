import React, { useEffect, useRef } from "react";
import "../styles/components/AgencyLocation.css";

const agencyLocations = {
  동부지사: { lat: 37.5665, lng: 126.978, address: "서울특별시 중구" },
  서부지사: { lat: 35.1796, lng: 129.0756, address: "부산광역시 중구" },
  충남서천: { lat: 36.08, lng: 126.691, address: "충청남도 서천군" },
};

const AgencyLocation = ({ locationName }) => {
  const mapRef = useRef(null);
  const locationInfo = agencyLocations[locationName];

  useEffect(() => {
    if (!locationInfo) return;

    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_API_KEY}`;
    script.async = true;

    script.onload = () => {
      const { naver } = window;
      const location = new naver.maps.LatLng(
        locationInfo.lat,
        locationInfo.lng
      );
      const map = new naver.maps.Map("agency-map", {
        center: location,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
      });

      new naver.maps.Marker({
        position: location,
        map,
        size: new naver.maps.Size(50, 52),
        origin: new naver.maps.Point(0, 0),
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [locationInfo]);

  if (!locationInfo) return null;

  return (
    <div className="agency-map-container">
      <div className="agency-location-information">
        <p>주소 : {locationInfo.address}</p>
        <p>|</p>
        <p>TEL : 055-762-0344</p>
        <p>|</p>
        <p>FAX : 0505-662-0344</p>
      </div>

      <div id="agency-map" ref={mapRef}></div>
    </div>
  );
};

export default AgencyLocation;
