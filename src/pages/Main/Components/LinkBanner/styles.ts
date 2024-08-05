import styled from "styled-components";

export const LinkBannerBox = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  overflow: hidden;
  margin-bottom: 180px;
  @media (max-width: 1024px) {
    margin-bottom: 120px;
  }
  @media (max-width: 576px) {
    margin-bottom: 60px;
  }
`;

export const LinkBannerContent = styled.div`
  padding-left: calc(50% - 590px);
  padding-right: calc(50% - 590px); 
  padding-top: 120px;
  padding-bottom: 140px;
  margin-left: 10px;
  margin-right: 10px;
  @media (max-width: 700px) {
    margin-left: 0;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  @media (max-width: 700px) {
    top: 50px;
    height: 80%;
  }
`;

export const LinkBannerTitle = styled.h1`
  font-family: "OpenSansBold";
  line-height: 68px;
  color: white;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
   /* @media (max-width: 1440px) {
    font-size: 48px;
  }  */
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

export const LinkBannerButtons = styled.div`
display: flex;
justify-content: space-between;
padding: 60px 120px 0 120px;
@media (max-width: 1150px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  }
`;

