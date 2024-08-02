import styled, { css } from "styled-components";

interface props {
  $params: string;
  $pathname: string;
}

export const NavItemButtonLink = styled.button<props>`
  padding: 10px;
  text-transform: uppercase;
  white-space: nowrap;
  border: 1px solid transparent;
  background-clip: text;
  -webkit-background-clip: text;

  ${({ $params, $pathname }) =>
    $params === $pathname &&
    css`
      background: ${({ theme }) => theme.colors.gradient};
      -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
    `}

  &:hover {
    border-image: ${({ theme }) => theme.colors.gradient};
    border-image-slice: 1;
    background-image: ${({ theme }) => theme.colors.gradient};
    -webkit-text-fill-color: ${({ theme, $params, $pathname }) =>
      $params === $pathname ? theme.colors.white : "transparent"};
  }

  &:active {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 1024px) {
    width: 100%;
    text-align: left;
  }
`;
