import styled from "styled-components";

export const LinkBannerBox = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  overflow: hidden;
  margin-bottom: 180px;
`;

export const LinkBannerContent = styled.div`
  padding-left: calc(50% - 590px);
  padding-right: calc(50% - 590px); 
  padding-top: 120px;
  padding-bottom: 140px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const LinkBannerBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/LinkBannerBackground.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

export const LinkBannerTitle = styled.h1`
  font-family: "OpenSansBold";
  line-height: 68px;
  color: white;
  text-align: center;
`;

export const LinkBannerButtons = styled.div`
display: flex;
justify-content: space-between;
padding: 60px 120px 0 120px;
`;
