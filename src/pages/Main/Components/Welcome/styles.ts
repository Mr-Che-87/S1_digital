import styled from "styled-components";

export const WelcomeBox = styled.section`
background-image: url("/images/welcomeBackground.png");
`;

export const WelcomeTitle = styled.h1`
  margin-top: 120px;
  font-family: "OpenSansBold";
  line-height: 68px;
  padding-left: calc(50% - 690px);
  padding-right: calc(50% - 273px);
  color: white;
  
`;

export const WelcomeDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;
export const WelcomeDescription = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: white;

`;

