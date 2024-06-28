import { Link } from "react-router-dom";
import styled from "styled-components";
interface StylesProps {
  readonly $background: string;
}
export const AccordionBox = styled.section<StylesProps>`
  background-image: url(${(props) => props.$background});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 60px;
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
`;
export const HistoryBox = styled.div`
  padding-bottom: 120px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const HistoryLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  padding-bottom: 20px;
  //styleName: H1;
  font-size: 64px;
  font-weight: 700;
  line-height: 77px;
  text-align: left;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 230px;
  font-size: 24px;
  font-weight: 400;
  line-height: 120%;
  max-width: 920px;
`;
export const StopFirst = styled.stop``;
export const StopSecond = styled.stop``;
export const StopThird = styled.stop``;
export const SvgBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 60px;
`;
export const Svg = styled.svg`
  &:hover {
    ${StopFirst} {
      stop-color: #bd18cb;
    }
    ${StopSecond} {
      stop-color: #612dac;
    }
    ${StopThird} {
      stop-color: #8b4bed;
    }
  }
`;
