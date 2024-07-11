import styled from "styled-components";
export const TeamBox = styled.section`
  margin-top: 400px;
  margin-bottom: 180px;
  padding-left: calc(50% - 620px);
  padding-right: calc(50% - 620px);
`;
export const TeamTitleBox = styled.div`
  background-image: url("/images/Team.svg");
  background-position: center;
  background-repeat: no-repeat;
  //background-size: contain;
  text-align: center;
  margin-bottom: 80px;

`;
export const TeamTitle = styled.h1`
  padding-top: 65px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const TeamItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 40px;
  justify-content: center;
`;
