import React from "react";
import Header from "../components/Header";
import BackgroundVideo from "../components/BackgroundVideo";
import Intro from "../components/Intro";
import TopMoveBtn from "../components/TopMoveBtn";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <BackgroundVideo />
      <Intro />
      <TopMoveBtn />
      <Footer />
    </div>
  );
};

export default Home;
