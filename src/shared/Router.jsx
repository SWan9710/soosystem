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

        <Route path="/metal/introduction" element={<MetalIntroduction />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
