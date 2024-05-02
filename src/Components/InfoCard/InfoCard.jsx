import React from "react";
import { CardBlock } from "./InfoCard.styled";

export const InfoCard = ({ name, info }) => {
  const colorChange = () => {
    if (name === "Hodlers") {
      return { color: "blue" };
    } else {
      return { color: "green" };
    }
  };
  return (
    <CardBlock>
      <h2>
        For <span style={colorChange()}>{name}</span>
      </h2>
      <p>{info}</p>

      {name === "Hodlers" ? (
        <img className="hodlersman" src="/img/hodlersman.png" alt="Man" />
      ) : (
        <img src="/img/creatorsman.png" alt="Man" />
      )}
    </CardBlock>
  );
};
