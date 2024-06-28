import styled from "styled-components";
export const TeamBox = styled.section`
  margin-top: 180px;
`;
export const TeamTitleBox = styled.div`
  background-image: url("/images/Team.svg");
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 180px;
`;
export const TeamTitle = styled.h2`
  padding-top: 100px;
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
