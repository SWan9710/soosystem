import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import AboutHistory from "../pages/AboutHistory";
import AboutStory from "../pages/AboutStory";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/history" element={<AboutHistory />}></Route>
        <Route path="/about/story" element={<AboutStory />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
