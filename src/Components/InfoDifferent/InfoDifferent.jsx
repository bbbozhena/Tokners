import React from "react";
import { MainDifBlock } from "./InfoDifferent.styled";

export const InfoDifferent = () => {
  const dataInfo = {
    name: "What makes us different?",
    details: `We would only launch tokens with the express permission of the creators.
        There are several thousand celebrities and creators on twitter, tiktok, Instagram and YouTube with followings in the millions who we would be actively engaging before we go viral. 
        We would get them on our platform and they would see the opportunity to create a fan driven digital economy where their digital content can be traded as NFTs and their most loyal fans can have the monetary value of their creator's currency increase significantly as they promote their digital currency across their channels while our native token holders benefit from the Tokners popularity.
        `,
  };
  return (
    <MainDifBlock>
      <h3>{dataInfo.name}</h3>
      <p>{dataInfo.details}</p>
    </MainDifBlock>
  );
};
