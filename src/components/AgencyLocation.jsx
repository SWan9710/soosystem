import React, { useEffect, useRef } from "react";
import "../styles/components/AgencyLocation.css";

const agencyLocations = {
  포항공장: {
    lat: 35.9872702,
    lng: 129.3361263,
    address: "경상북도 포항시 남구 연일읍 원서길 87-9",
  },
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
        zoom: 20,
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
