import React from "react";
import FifthPage from "../FifthPage/FifthPage";
import FirstPage from "../FirstPage/FirstPage";
import { Footer } from "../Footer/Footer";
import FourPage from "../FourPage/FourPage";
import NavBar from "../NavBar/NavBar";
import SecondPage from "../SecondPage/SecondPage";
import ThirdPage from "../ThirdPage/ThirdPage";
import "./Home.scss";
export const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourPage />
      <FifthPage />
      <Footer />
    </div>
  );
};
