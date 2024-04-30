import React from "react";
import { Header } from "../../Components/Header/Header";
import { LearnMoreBanner } from "../../Components/LearnMoreBanner/LearnMoreBanner";
import { HomeMain } from "./Home.styled";

export const Home = () => {
  return (
    <HomeMain>
      <img className="vectorone" src="/img/Vector-1.png" alt="Vector1" />
      <img className="vectortwo" src="/img/Vector-2.png" alt="Vector2" />
      <img className="vectorthree" src="/img/Vector-3.png" alt="Vector3" />
      <img className="vectorfour" src="/img/Vector-4.png" alt="Vector4" />
      <Header />
      <LearnMoreBanner />
    </HomeMain>
  );
};
