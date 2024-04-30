import styled from "styled-components";

export const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Azo Sans";
  padding: 30px 30px;

  @media screen and (max-width: 792px) {
    display: flex;
    flex-direction: column;
  }
`;
export const HeaderLogo = styled.div`
  display: flex;
`;

export const HeaderInfoMain = styled.div`
  display: flex;
  padding-top: 15px;

  @media screen and (max-width: 792px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
export const HeaderInfo = styled.div`
  display: flex;
  padding: 0px 30px;
  @media screen and (max-width: 792px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  p {
    padding-right: 30px;
    text-decoration: underline;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
  }
`;
export const HeaderSign = styled.div`
  display: flex;
  p {
    padding-right: 20px;
    text-decoration: underline;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
  }
`;
export const HeaderSignButton = styled.button`
  border: none;
  border-radius: 40px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px 40px;
  background-color: white;
  cursor: pointer;
`;
