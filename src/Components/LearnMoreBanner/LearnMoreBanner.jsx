import React from "react";
import {
  MainBannerBlock,
  MainBannerInfo,
  MainBannerButton,
  MainBannerImg,
} from "./LearnMoreBanner.styled";

export const LearnMoreBanner = () => {
  return (
    <MainBannerBlock>
      <MainBannerInfo>
        <a>At Tokners are</a>
        <h1>Reimagining social media through the power of the blockchain.</h1>
        <p>
          We are creating social media 3.0 with influencers, celebrities and
          creators being able to launch their own digital currency by simply
          creating a profile with media content posted as Non fungible Tokens
          that can be owned and traded on the Tokners network
        </p>
        <MainBannerButton>Learn More</MainBannerButton>
      </MainBannerInfo>
      <MainBannerImg>
        <img className="oldman" src="/img/oldman.png"></img>
        <img className="man" src="/img/man.png"></img>
      </MainBannerImg>
    </MainBannerBlock>
  );
};
