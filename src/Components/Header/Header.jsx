import React from "react";

import {
  HeaderMain,
  HeaderLogo,
  HeaderInfoMain,
  HeaderInfo,
  HeaderSign,
  HeaderSignButton,
} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderMain>
      <HeaderLogo>
        <img src="/img/logo.svg" alt="Logo" />
      </HeaderLogo>
      <HeaderInfoMain>
        <HeaderInfo>
          <p>Our team</p>
          <p>Tokens</p>
          <p>Connect wallet</p>
          <p>Lightpaper</p>
        </HeaderInfo>
        <HeaderSign>
          <p>Sign In</p>
          <HeaderSignButton>Sign Up</HeaderSignButton>
        </HeaderSign>
      </HeaderInfoMain>
    </HeaderMain>
  );
};
