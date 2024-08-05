import styled from "styled-components";

export const ApplicationMenuBox = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  overflow: hidden;
  margin-top: 180px;
  margin-bottom: 180px;
  @media (max-width: 1024px) {
    margin-bottom: 120px;
    margin-top: 120px;
  }
  @media (max-width: 576px) {
    margin-bottom: 60px;
    margin-top: 60px;
  }
`;

export const ApplicationMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: calc(50% - 590px);
  padding-right: calc(50% - 590px); 
  padding-top: 120px;
  padding-bottom: 140px;
  margin-left: 15px;
  margin-right: 15px;
  @media (max-width: 700px) {
    margin-left: 0;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ApplicationMenuBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/ApplicationMenuBackground.png");   
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
 @media (max-width: 700px) {
    top: 50px;
    height: 80%;
  } 
`;

export const ApplicationMenuTitle = styled.h1`
  font-family: "OpenSansBold";
  line-height: 68px;
  color: white;
  text-align: center;
  align-self: center;
  max-width: 780px;
  padding-bottom: 60px;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 1440px) {
    font-size: 48px;
  } 
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 50px;
  }
  @media (max-width: 700px) {
    font-size: 28px;
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
  }
  @media (max-width: 470px) {
    font-size: 20px;
    line-height: normal;
  }
`;

export const ApplicationMenuButton = styled.div`
  align-self: center;
`;

