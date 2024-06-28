import styled, { css } from "styled-components";
interface StylesProps {
  readonly $current?: number;
  readonly $shortTitle?: string;
  readonly $position?: string;
  readonly $titleWidth?: string;
  readonly $textAlight?: string;
  readonly $textTitleWidth?: string;
}

export const Container = styled.article`
  margin-top: 140px;
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
`;
export const TopContainer = styled.div<StylesProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${({ $position }) =>
    $position === "center" &&
    css`
      justify-content: center;
    `}
  gap: 120px;
  margin-bottom: 60px;
`;
export const TextContainer = styled.div<StylesProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: ${(props) =>
    props.$textTitleWidth ? props.$textTitleWidth : "680px"};
  gap: 20px;
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
`;
export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 120%;
`;
export const BottomTextContainer = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 60px 89px;
  counter-reset: my-counter;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;
export const BottomTextBox = styled.li`
  width: 380px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:before {
    padding-right: 20px;
    content: counter(my-counter);
    counter-increment: my-counter;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: ${({ theme }) => theme.colors.gradient};
    -webkit-text-fill-color: transparent;
    font-size: 48px;
    font-weight: 700;
    line-height: 120%;
    text-transform: uppercase;
    font-family: "OpenSansBold";
  }
`;
export const BottomTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const BottomText = styled.p`
  width: 380px;
  font-size: 18px;
  font-weight: 400;
  line-height: 120%;
`;
export const ListItem = styled.div<StylesProps>`
  padding: 0px 60px;
  ${({ $current }) =>
    $current === 2 &&
    css`
      &:nth-child(1) {
        border-right: 1px solid ${({ theme }) => theme.colors.black};
      }
    `}
  ${({ $current }) =>
    $current === 3 &&
    css`
      &:nth-child(1),
      &:nth-child(2) {
        border-right: 1px solid ${({ theme }) => theme.colors.black};
      }
    `}
    ${({ $current }) =>
    $current === 4 &&
    css`
      &:nth-child(1),
      &:nth-child(3) {
        border-right: 1px solid ${({ theme }) => theme.colors.black};
      }
      &:nth-child(3),
      &:nth-child(4) {
        margin-top: 40px;
      }
    `}
    ${({ $current }) =>
    $current === 5 &&
    css`
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(4) {
        border-right: 1px solid ${({ theme }) => theme.colors.black};
      }
    `}
    ${({ $current }) =>
    $current === 6 &&
    css`
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(4),
      &:nth-child(5) {
        border-right: 1px solid ${({ theme }) => theme.colors.black};
      }
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6) {
        margin-top: 40px;
      }
    `}
`;
