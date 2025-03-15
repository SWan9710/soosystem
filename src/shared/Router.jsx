import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import AboutIntroduction from "../pages/AboutIntroduction";
import AboutHistory from "../pages/AboutHistory";
import AboutOrganization from "../pages/AboutOrganization";
import AboutCertificate from "../pages/AboutCertificate";
import AboutLocation from "./../pages/AboutLocation";

import AboutStory from "../pages/AboutStory";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/introduction" element={<AboutIntroduction />} />
        <Route path="/about/history" element={<AboutHistory />} />
        <Route path="/about/organization" element={<AboutOrganization />} />
        <Route path="/about/certificate" element={<AboutCertificate />} />
        <Route path="/about/location" element={<AboutLocation />} />
        <Route path="/about/story" element={<AboutStory />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
