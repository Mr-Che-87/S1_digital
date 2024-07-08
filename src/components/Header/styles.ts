import styled from "styled-components";

export const Shell = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  position: relative;
  padding: 1px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.white};
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
  padding-top: 20px;
  padding-bottom: 20px;
`;




export const HeaderNav = styled.nav`
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;
`;
