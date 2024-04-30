import styled from "styled-components";

export const MainBannerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Azo Sans";
`;
export const MainBannerInfo = styled.div`
  padding: 80px 150px;
  a {
    color: blue;
  }
  h1 {
    width: 600px;
    font-size: 48px;
    line-height: 54px;
    font-weight: 400;
  }
  p {
    font-size: 15px;
    font-weight: light;
    width: 505px;
    line-height: 24px;
    color: #3c3c3d;
  }
`;
export const MainBannerButton = styled.button`
  color: white;
  background-color: #22a75d;
  border: none;
  border-radius: 40px;
  padding: 10px 30px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
export const MainBannerImg = styled.div`
  .oldman {
    position: absolute;
    right: 22%;
    height: 620px;
  }
  .man {
    position: absolute;
    top: 20%;
    right: 0%;
    height: 600px;
  }
`;
