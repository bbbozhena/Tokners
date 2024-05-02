import styled from "styled-components";

export const HomeMain = styled.div`
  img {
    position: absolute;
  }
  .vectorthree {
    right: -0%;
    z-index: -2;
    width: 700px;
  }
  .vectortwo {
    right: 0%;
    z-index: -3;
    width: 900px;
  }
  .vectorone {
    right: 0%;
    z-index: -4;
    width: 1000px;
  }
  .vectorfour {
    right: 0%;
    z-index: -5;
    width: 1100px;
  }
  .top {
    top: 1200px;
    z-index: -1;
  }
  .bottom {
    top: 1800px;
    z-index: -1;
  }
`;

export const InfoCardMain = styled.div`
  display: flex;
  justify-content: space-around;
`;
