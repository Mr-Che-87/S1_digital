import styled from "styled-components";
export const SynergyServicesBox = styled.article`
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
  margin-top: 140px;
`;
export const Container = styled.div``;
export const Title = styled.h1`
  margin-bottom: 60px;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const ServicesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  row-gap: 60px;
  column-gap: 20px;
`;
export const ServicesShell = styled.div`
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    margin-top: 60px;
  }
`;
