import styled from "styled-components";
export const CasesBox = styled.section`
  margin-top: 60px;
  margin-bottom: 180px;
  padding-left: calc(50% - 590px);   
  padding-right: calc(50% - 590px); 
`;
export const CasesTitleBox = styled.div`
  display: flex;
  justify-content: center;
  background-image: url("/images/сasesBackground.svg");
  background-position: center;
  background-repeat: no-repeat;
  //background-size: contain;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 60px;
  @media (max-width: 1024px) {
    background-size: 550px;
    margin-bottom: 60px;
  }
  @media (max-width: 576px) {
    background-image: url("/images/сasesSmallBackground.svg");
    background-size: contain;
    margin-bottom: 40px;
  }
`;
export const CasesTitle = styled.h1`
  padding-top: 65px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 1024px) { 
    padding-top: 40px;
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
  }
  @media (max-width: 576px) {
    max-width: 300px;
  }
`;
export const CasesItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 40px;
  column-gap: 16px;
  margin-bottom: 120px;
  @media (max-width: 576px) {
    margin-bottom: 70px;
  }
`;
export const CasesButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
