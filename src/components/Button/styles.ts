// styles.ts
import styled, { css } from "styled-components";

interface StylesProps {
  readonly $variant?: string;
  readonly $type: string;
}

export const ArrowSvg = styled.svg<StylesProps>`
  transition: 0.3s all;
  path {
    stroke: ${({ theme }) => theme.colors.black};
    ${({ $type }) =>
      $type === "bold" &&
      css`
        stroke: ${({ theme }) => theme.colors.white};
      `};
    ${({ $type }) =>
      $type === "color" &&
      css`
        stroke: #8b4bed;
      `};
  }

`;

export const ButtonStyled = styled.button<StylesProps>`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: ${({ theme }) => theme.colors.black};
  padding: 20px 120px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  white-space: nowrap;

  ${({ $type }) =>
    $type === "bold" &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background-image: ${({ theme }) => theme.colors.gradient};
      background-clip: padding-box;
      -webkit-background-clip: padding-box;
    `};

  ${({ $type }) =>
    $type === "color" &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.purple}; // Update border color
      background-image: ${({ theme }) => theme.colors.gradient};
      -webkit-text-fill-color: transparent;
    `};

  ${({ $variant }) =>
    $variant === "short" &&
    css`
      padding: 20px 60px;
    `};

  &:hover {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.purple}; // Update border color
    background-image: ${({ theme }) => theme.colors.gradient};
    -webkit-text-fill-color: transparent;

    ${({ $type }) =>
      $type === "color" &&
      css`
        background-clip: padding-box;
        -webkit-background-clip: padding-box;
        -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
      `};

    ${({ $type }) =>
      $type === "bold" &&
      css`
        border-image: none;
        background-image: ${({ theme }) => theme.colors.lightGradient};
        -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
      `};

    & ${ArrowSvg} {
      path {
        stroke: #8b4bed;

        ${({ $type }) =>
          $type === "color" &&
          css`
            stroke: ${({ theme }) => theme.colors.white};
          `};

        ${({ $type }) =>
          $type === "bold" &&
          css`
            stroke: ${({ theme }) => theme.colors.white};
          `};
      }
    }
  }

  &:active {
    background: ${({ theme }) => theme.colors.gradient};

    ${({ $type }) =>
      $type === "color" &&
      css`
        background: ${({ theme }) => theme.colors.RotateGradient};
      `};

    ${({ $type }) =>
      $type === "bold" &&
      css`
        background: ${({ theme }) => theme.colors.RotateGradient};
      `};

    -webkit-text-fill-color: ${({ theme }) => theme.colors.white};

    & ${ArrowSvg} {
      path {
        stroke: ${({ theme }) => theme.colors.white};
      }
    }
  }

  @media (max-width: 700px) {
    width: 250px;
    padding: 20px 30px;  //чтоб стрелочка не пропадала
    font-size: 14px;

  }

`;
