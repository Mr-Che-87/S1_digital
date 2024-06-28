import styled, { css } from "styled-components";
import { NoTypeText } from "../../interfaces/serviceData";
interface StylesProps {
  readonly $type?: string;
  readonly $current?: number;
  readonly $titleWidth?: string;
  readonly $titleTextWidth?: string;
  readonly $width?: string;
  readonly $even?: string;
  readonly $position?: string;
  readonly $textAlight?: string;
  readonly $noTypeText?: NoTypeText;
}
export const Container = styled.article<StylesProps>`
  margin-top: 140px;
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
  ${({ $type }) =>
    $type === "black" &&
    css`
      background: ${({ theme }) => theme.colors.darkBlue};
      padding-top: 80px;
      padding-bottom: 80px;
    `}
  ${({ $type }) =>
    $type === "color" &&
    css`
      background: ${({ theme }) => theme.colors.gradient};
      border: none;
      padding-top: 80px;
      padding-bottom: 80px;
    `}
`;
export const TopContainer = styled.div<StylesProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  ${({ $position }) =>
    $position === "center" &&
    css`
      justify-content: center;
      row-gap: 20px;
    `}
  column-gap: 120px;
  margin-bottom: 60px;
  ${({ $type }) =>
    $type === "black" &&
    css`
      margin-bottom: 40px;
    `}
`;
export const TextContainer = styled.div<StylesProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: ${(props) =>
    props.$titleTextWidth ? props.$titleTextWidth : "680px"};
`;
export const Title = styled.h2<StylesProps>`
  width: ${(props) => (props.$titleWidth ? props.$titleWidth : "380px")};
  font-size: 48px;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  ${({ $textAlight }) =>
    $textAlight === "center" &&
    css`
      text-align: center;
    `}
  ${({ $type }) =>
    $type === "black" &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
  ${({ $type }) =>
    $type === "marked" &&
    css`
      background-clip: text;
      -webkit-background-clip: text;
      background-image: ${({ theme }) => theme.colors.gradient};
      -webkit-text-fill-color: transparent;
    `}
    ${({ $type }) =>
    $type === "color" &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;
export const Text = styled.p<StylesProps>`
  font-size: 18px;
  font-weight: 400;
  line-height: 120%;
  margin-top: 10px;
  ${({ $type }) =>
    $type === "black" &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
  ${({ $type }) =>
    $type === "color" &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;
export const BottomTextContainer = styled.div<StylesProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: ${(props) => (props.$even === "true" ? "60px 80px" : "60px 40px")};
  border: 1px solid ${({ theme }) => theme.colors.black};

  ${({ $type }) =>
    $type === "black" &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.white};
    `}
  ${({ $type }) =>
    $type === "color" &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.white};
    `}
`;
export const BottomTextBox = styled.div<StylesProps>`
  padding: ${(props) =>
    props.$even === "true" ? "0px 60px 0px 49px" : "0px 40px 0px 40px"};
  box-sizing: unset;
  width: ${(props) => (props.$width ? props.$width : "280px")};
  display: flex;
  flex-wrap: wrap;
  ${({ $current, $type, theme }) =>
    $current === 2 &&
    css`
      &:nth-child(1) {
        border-right: 1px solid
          ${$type === "black"
            ? theme.colors.white
            : $type === "color"
            ? theme.colors.white
            : theme.colors.black};
      }
    `}
  ${({ $current, $type, theme }) =>
    $current === 3 &&
    css`
      &:nth-child(1),
      &:nth-child(2) {
        border-right: 1px solid
          ${$type === "black"
            ? theme.colors.white
            : $type === "color"
            ? theme.colors.white
            : theme.colors.black};
      }
    `}
    ${({ $current, $type, theme, $even }) =>
    $current === 4 &&
    css`
      ${$even === "true"
        ? css`
            &:nth-child(1),
            &:nth-child(3) {
              border-right: 1px solid
                ${$type === "black"
                  ? theme.colors.white
                  : $type === "color"
                  ? theme.colors.white
                  : theme.colors.black};
            }
            &:nth-child(3),
            &:nth-child(4) {
              margin-top: 40px;
            }
          `
        : css`
            &:nth-child(1),
            &:nth-child(2) {
              border-right: 1px solid
                ${$type === "black"
                  ? theme.colors.white
                  : $type === "color"
                  ? theme.colors.white
                  : theme.colors.black};
            }
            &:nth-child(4) {
              margin-top: 40px;
            }
          `}
    `}
    ${({ $current, $type, theme, $noTypeText }) =>
    $current === 5 &&
    css`
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(4) {
        border-right: 1px solid
          ${$type === "black"
            ? theme.colors.white
            : $type === "color"
            ? theme.colors.white
            : theme.colors.black};
      }
      &:nth-child(4),
      &:nth-child(5) {
        margin-top: 40px;
      }
      &:nth-child(${$noTypeText?.number}) {
        width: ${$noTypeText?.width};
      }
    `}
    ${({ $current, $type, theme }) =>
    $current === 6 &&
    css`
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(4),
      &:nth-child(5) {
        border-right: 1px solid
          ${$type === "black"
            ? theme.colors.white
            : $type === "color"
            ? theme.colors.white
            : theme.colors.black};
      }
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6) {
        margin-top: 40px;
      }
      &:nth-child(6) {
        margin-top: 40px;
      }
    `}
    ${({ $current, $type, theme, $even }) =>
    $current === 8 &&
    css`
      ${$even === "true"
        ? css`
            &:nth-child(1),
            &:nth-child(3),
            &:nth-child(5),
            &:nth-child(7) {
              border-right: 1px solid
                ${$type === "black"
                  ? theme.colors.white
                  : $type === "color"
                  ? theme.colors.white
                  : theme.colors.black};
            }
            &:nth-child(3),
            &:nth-child(4),
            &:nth-child(5),
            &:nth-child(6),
            &:nth-child(7),
            &:nth-child(8) {
              margin-top: 40px;
            }
          `
        : css`
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(4),
            &:nth-child(5),
            &:nth-child(7) {
              border-right: 1px solid
                ${$type === "black"
                  ? theme.colors.white
                  : $type === "color"
                  ? theme.colors.white
                  : theme.colors.black};
            }
            &:nth-child(4),
            &:nth-child(5),
            &:nth-child(6),
            &:nth-child(7),
            &:nth-child(8) {
              margin-top: 40px;
            }
          `}
    `}
`;
export const BottomTitle = styled.h3<StylesProps>`
  font-size: 20px;
  height: 48px;
  display: flex;
  align-items: center;
  ${({ $type }) =>
    $type === "black" &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
  ${({ $type }) =>
    $type === "color" &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
    ${({ $type }) =>
    $type === "gradient" &&
    css`
      background-clip: text;
      -webkit-background-clip: text;
      background-image: ${({ theme }) => theme.colors.gradient};
      -webkit-text-fill-color: transparent;
    `}
`;
export const BottomText = styled.p<StylesProps>`
  padding-top: 10px;
  ${({ $type }) =>
    $type === "black" &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
  ${({ $type }) =>
    $type === "color" &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;
