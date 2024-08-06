import styled from "styled-components";
import {
  StopEnd,
  StopStart,
  StopSvg,
} from "../../../../components/VkLink/styles";

export const HeadingBox = styled.section`
margin-left: 10px;
margin-right: 10px;
padding-left: calc(50% - 590px);
padding-right: calc(50% - 590px);
`; 



export const HeadingTitle = styled.h1`
  padding-left: calc(50% - 490px);
  padding-right: calc(50% - 50vw); 
  margin-top: 120px;
  font-family: "OpenSansBold";
  line-height: 68px;
  text-transform: none;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }
`;
  export const HeadingSpan = styled.span`
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: 76px;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: ${({ theme }) => theme.colors.gradient};
    -webkit-text-fill-color: transparent;
    @media (max-width: 1024px) {
      font-size: 72px;
    }
    @media (max-width: 700px) {
      font-size: 52px;
    }
  `;
  export const HeadingNoSpan = styled.span`
    font-family: "OpenSansBold";
    line-height: 68px;
    text-transform: none;
    @media (max-width: 1024px) {
      font-size: 48px;
    }
    @media (max-width: 700px) {
      display: none;
    }
  `;
  export const MdashSpan = styled.span`
    @media (max-width: 700px) {
      display: none;
    }
  `;

export const HeadingSubTitle = styled.h1`
  padding-left: calc(50% - 490px);
  padding-right: calc(50% - 50vw); 
  margin-top: 0px;
  font-family: "OpenSansBold";
  line-height: 68px;
  text-transform: none;
  @media (max-width: 1024px) {
    font-size: 48px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
export const HeadingMobSubTitle = styled.h1`
  display: none;
@media (max-width: 700px) {
    display: block;
    font-size: 24px;
    text-transform: none;
    line-height: normal;
   
  }
`;


export const HeadingDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  @media (max-width: 700px) {
    margin-top: 60px;
  }
`;
export const HeadingDescription = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;  

`;
export const HeadingServicesBox = styled.div`
  //padding-left: 140px;
  display: flex;
  gap: 40px;
  font-size: 24px;
  align-items: baseline;

  p {
    @media (max-width: 700px) {
    display: none;
  }
  }
`;

export const HeadingDescription2 = styled.div`
  margin-top: 165px;
  margin-bottom: 400px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  font-size: 24px;
  align-items: end;
  @media (max-width: 1440px) {
    margin-bottom: 360px;  //для анимированной Lines
  }
  @media (max-width: 1040px) {
    margin-bottom: 320px;  //для анимированной Lines
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 200px;   //для анимированной Lines
  }
  @media (max-width: 382px) {
    margin-bottom: 160px;   //для анимированной Lines
    }
    @media (max-width: 330px) {
    margin-bottom: 80px;   //для анимированной Lines
    }
`;
export const VkBlock = styled.div`
  background-clip: text;
  -webkit-background-clip: text;
  display: flex;
  align-items: center;
  //width: 145px;
  gap: 10px;
  text-transform: uppercase;
  &:hover {
    background-image: ${({ theme }) => theme.colors.gradient};
    -webkit-text-fill-color: transparent;
    ${StopSvg} {
      stop-color: #de24ee;
    }
    ${StopStart} {
      stop-color: #9246ff;
    }
    ${StopEnd} {
      stop-color: #a164ff;
    }
  }
  &:active {
    ${StopSvg} {
      stop-color: #bd18cb;
    }
    ${StopStart} {
      stop-color: #612dac;
    }
    ${StopEnd} {
      stop-color: #8b4bed;
    }
  }
  @media (max-width: 700px) {
    order: 2;
  }
`;

export const DescriptionWrapper = styled.div`
  @media (max-width: 700px) {
    order: 1;
    text-align: center;
  }
`;
export const ServicesDescription = styled.p`
  margin-top: 20px;
  max-width: 400px;
`;

