import styled from "styled-components";

export const TariffsBox = styled.section`
  margin-top: 200px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: calc(50% - 590px);
  padding-right: calc(50% - 590px); 
  width: 100vw;
  height: auto;
  overflow: hidden;
  @media (max-width: 1024px) {
    margin-top: 150px;
  }
  @media (max-width: 576px) {
    margin-top: 60px;
  }
`;

export const TariffsTitleBox = styled.div`
  background-image: url("/images/TariffsBackGround.svg");
  background-position: center;
  background-repeat: no-repeat;
  //background-size: contain;
  text-align: center;
  @media (max-width: 1024px) {
    background-size: 600px;
  }
  @media (max-width: 700px) {
    background-size: 500px;
  }
  @media (max-width: 576px) {
    background-image: none;
  }
`;
export const TariffsTitle = styled.h1`
  padding-top: 60px; 
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

export const TariffsList = styled.ol`
   display: flex;
   justify-content: center;
  /* list-style-type: none;
  counter-reset: my-counter;
  margin-top: 80px;
  max-height: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 40px;  
  column-gap: 400px; 
  //grid-template-rows: repeat(2, 1fr);
  //align-content: space-between;
*/
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding-left: 0;
    padding-right: 0;
    background-image: none;
    justify-items: center;
  } 
`;