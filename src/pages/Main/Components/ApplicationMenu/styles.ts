import styled from "styled-components";

export const ApplicationMenuBox = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  overflow: hidden;
  margin-top: 180px;
  margin-bottom: 180px;
`;

export const ApplicationMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: calc(50% - 590px);
  padding-right: calc(50% - 590px); 
  padding-top: 120px;
  padding-bottom: 140px;
  margin-left: 10px;
  margin-right: 10px;
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
`;

export const ApplicationMenuButton = styled.div`
  align-self: center;
`;

