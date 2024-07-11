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
`;

export const TariffsTitleBox = styled.div`
  background-image: url("/images/TariffsBackGround.svg");
  background-position: center;
  background-repeat: no-repeat;
  //background-size: contain;
  text-align: center;
`;
export const TariffsTitle = styled.h1`
  padding-top: 35px; 
  padding-bottom: 120px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;

export const TariffsList = styled.ol`
   display: flex;
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

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding-left: 0;
    padding-right: 0;
    background-image: none;
    justify-items: center;
  } */
`;