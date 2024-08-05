import styled from "styled-components";
export const TeamBox = styled.section`
  margin-top: 200px;
  margin-bottom: 180px;
  padding-left: calc(50% - 620px);
  padding-right: calc(50% - 620px);
  @media (max-width: 1024px) {
    margin-top: 150px;
    margin-bottom: 120px;
  }
  @media (max-width: 576px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;
export const TeamTitleBox = styled.div`
  background-image: url("/images/Team.svg");
  background-position: center;
  background-repeat: no-repeat;
  //background-size: contain;
  text-align: center;
  margin-bottom: 80px;
  @media (max-width: 1024px) {
    background-size: 500px;
    margin-bottom: 0;
  }
  @media (max-width: 700px) {
    background-size: 300px;
    margin-bottom: 0;
    }
  @media (max-width: 576px) {
    background-image: none;
  }

`;
export const TeamTitle = styled.h1`
  padding-top: 65px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
  @media (max-width: 1024px) { 
    padding-top: 30px;
    font-size: 48px;
  }
  @media (max-width: 700px) {
    font-size: 40px;
  }
  @media (max-width: 576px) {
    font-size: 32px;
    line-height: normal;
    padding-top: 25px;
    margin-bottom: 30px;
  }
`;


export const TeamItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 40px;
  justify-content: center;

  @media (max-width: 576px) {
    row-gap: 20px;
  }
`;


