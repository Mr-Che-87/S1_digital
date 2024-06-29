import styled from "styled-components";
export const CasesBox = styled.section`
  margin-top: 60px;
`;
export const CasesTitleBox = styled.div`
  background-image: url("/images/сasesBackground.svg");
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 60px;
`;
export const CasesTitle = styled.h2`
  padding-top: 138px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const CasesItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 40px;
  column-gap: 16px;
  margin-bottom: 120px;
`;
export const CasesButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
