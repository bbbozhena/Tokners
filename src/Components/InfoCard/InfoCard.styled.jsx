import styled from "styled-components";

export const CardBlock = styled.div`
  background-color: #f2f0f4;
  border: none;
  border-radius: 25px;
  width: 550px;
  height: 715px;
  padding: 40px 30px 50px 0px;
  margin: 200px 50px;
  font-family: "Azo Sans";
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 98%;
  h1 {
    color: black;
    font-size: 36px;
    font-weight: medium;
  }
  p {
    color: #848484;
    font-size: 16px;
    font-weight: light;
    margin: 20px 20px;
    text-align: center;
  }

  span {
    text-decoration: underline;
    cursor: pointer;
  }

  img {
    top: 1105px;
  }

  .hodlersman {
    right: 20px;
    top: 1075px;
  }
`;
