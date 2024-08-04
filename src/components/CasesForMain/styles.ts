import styled from "styled-components";
export const CasesBox = styled.section`
  margin-top: 60px;
  margin-bottom: 180px;
  padding-left: calc(50% - 590px);   /////////ПОДПРАВИТЬ РАЗМЕР ПЕРВОЙ КАРТИНКИ "ореховно"
  padding-right: calc(50% - 590px); 
`;
export const CasesTitleBox = styled.div`
  background-image: url("/images/сasesBackground.svg");
  background-position: center;
  background-repeat: no-repeat;
  //background-size: contain;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 60px;
`;
export const CasesTitle = styled.h1`
  padding-top: 65px;
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
