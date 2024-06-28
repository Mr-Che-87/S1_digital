import styled from "styled-components";
import {
  StopEnd,
  StopStart,
  StopSvg,
} from "../../../../components/VkLink/styles";
export const HeadingBox = styled.section``;
export const HeadingSpan = styled.span`
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 76px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const HeadingTitle = styled.h1`
  margin-top: 180px;
  font-family: "OpenSansBold";
  line-height: 68px;
  padding-left: calc(50% - 690px);
  padding-right: calc(50% - 273px);
`;
export const HeadingSubTitle = styled.h1`
  margin-top: 40px;
  font-family: "OpenSansBold";
  line-height: 68px;
  padding-left: calc(50% - 550px);
  padding-right: calc(50% - 800px);
`;
export const HeadingDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;
export const HeadingDescription = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const HeadingServicesBox = styled.div`
  padding-left: 140px;
  display: flex;
  gap: 40px;
  font-size: 24px;
  align-items: baseline;
`;
export const ServicesDescription = styled.div`
  margin-top: 20px;
  max-width: 400px;
`;
export const VkBlock = styled.div`
  background-clip: text;
  -webkit-background-clip: text;
  display: flex;
  align-items: center;
  width: 145px;
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
`;
