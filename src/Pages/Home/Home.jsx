import React from "react";
import { Header } from "../../Components/Header/Header";
import { LearnMoreBanner } from "../../Components/LearnMoreBanner/LearnMoreBanner";
import { HomeMain, InfoCardMain } from "./Home.styled";
import { InfoCard } from "../../Components/InfoCard/InfoCard";
import { InfoDifferent } from "../../Components/InfoDifferent/InfoDifferent";

export const Home = () => {
  const dataForCreators = {
    name: "Creators",
    info: `Creators can gain independence through a decentralised digital currency system that is
    dependent on growing and engaging with the community and also their star power. They own
    10-15% of the total value of the tokens minted"`,
    infoimg: "/img/creatorsman.png",
  };

  const dataForHodlers = {
    name: "Hodlers",
    info: `Holding social tokens allows the individual to gain access to benefits including unreleased
    content, private communities, direct access to celebrity, early-access to tickets and more as well
    as the ability to trade with other communities in order to gain access to more creator content with
    early token buyers being the biggest winners as the value of the token increases with more
    buyers. `,
    infoimg: "/img/hodlersman.png",
  };

  return (
    <HomeMain>
      <img className="vectorone" src="/img/Vector-1.png" alt="Vector1" />
      <img className="vectortwo" src="/img/Vector-2.png" alt="Vector2" />
      <img className="vectorthree" src="/img/Vector-3.png" alt="Vector3" />
      <img className="vectorfour" src="/img/Vector-4.png" alt="Vector4" />
      <img className="top" src="/img/Blacktop.png" alt="Decor" />
      <img className="bottom" src="/img/Blackbottom.png" alt="Decor" />
      <Header />
      <LearnMoreBanner />
      <InfoCardMain>
        <InfoCard name={dataForCreators.name} info={dataForCreators.info} />
        <InfoCard name={dataForHodlers.name} info={dataForHodlers.info} />
      </InfoCardMain>
      <InfoDifferent />
    </HomeMain>
  );
};
