import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import AboutIntroduction from "../pages/About/AboutIntroduction";
import AboutHistory from "../pages/About/AboutHistory";
import AboutOrganization from "../pages/About/AboutOrganization";
import AboutCertificate from "../pages/About/AboutCertificate";
import AboutLocation from "../pages/About/AboutLocation";
import PlantIntroduction from "../pages/Plant/PlantIntroduction";
import PlantPerformance from "../pages/Plant/PlantPerformance";
import MetalIntroduction from "../pages/Metal/MetalIntroduction";
import MetalPerformance from "../pages/Metal/MetalPerformance";
import EducationIntroduction from "../pages/Education/EducationIntroduction";
import EducationPerformance from "../pages/Education/EducationPerformance";
import EducationDelivery from "../pages/Education/EducationDelivery";
import MainFacilites from "./../pages/Facilities/MainFacilites";
import Agency from "../pages/Agency/Agency";

import AboutStory from "../pages/About/AboutStory";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인화면 */}
        <Route path="/" element={<Home />} />
        <Route path="/about/story" element={<AboutStory />}></Route>

        {/* 회사소개 페이지 */}
        <Route path="/about/introduction" element={<AboutIntroduction />} />
        <Route path="/about/history" element={<AboutHistory />} />
        <Route path="/about/organization" element={<AboutOrganization />} />
        <Route path="/about/certificate" element={<AboutCertificate />} />
        <Route path="/about/location" element={<AboutLocation />} />

        {/* 플랜트사업 */}
        <Route path="/plant/introduction" element={<PlantIntroduction />} />
        <Route path="/plant/performance" element={<PlantPerformance />} />

        {/* 금속가공사업 */}
        <Route path="/metal/introduction" element={<MetalIntroduction />} />
        <Route path="/metal/performance" element={<MetalPerformance />} />

        {/* 교육재료사업 */}
        <Route
          path="/education/introduction"
          element={<EducationIntroduction />}
        />
        <Route
          path="/education/performance"
          element={<EducationPerformance />}
        />
        <Route path="/education/delivery" element={<EducationDelivery />} />

        {/* 주요설비 */}
        <Route path="/facilities" element={<MainFacilites />} />

        {/* 대리점 */}
        <Route path="/agency" element={<Agency />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
