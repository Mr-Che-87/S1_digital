import styled from "styled-components";
export const WeDoBox = styled.section`
  margin-top: 200px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: calc(50% - 590px);
  padding-right: calc(50% - 590px);
  @media (max-width: 1024px) {
    margin-top: 150px;
  }
  @media (max-width: 576px) {
    margin-top: 60px;
  }
`;
export const WeDoTitleBox = styled.div`
  background-image: url("/images/WeDoBackGround.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  @media (max-width: 1024px) {
    background-size: 520px;
  }
  @media (max-width: 700px) {
    background-size: 450px;
  }
  @media (max-width: 576px) {
    background-image: none;
  }
`;
export const WeDoTitle = styled.h1`
  padding-top: 55px;  
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
    padding-top: 25px;
  }
  @media (max-width: 576px) {
    font-size: 32px;
  }
`;


export const WeDoList = styled.ol`
  background-image: url("/images/itemListBackground.svg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  list-style-type: none;
  counter-reset: my-counter;
  margin-top: 80px;
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 40px;  //верт-расстояние м-у эл-ми
  column-gap: 400px; //верт-расстояние м-у эл-ми
  //grid-template-rows: repeat(2, 1fr);
  //align-content: space-between;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding-left: 0;
    padding-right: 0;
    background-image: none;
    justify-items: center;
    margin-top: 40px;
  }
  @media (max-width: 576px) {
    margin-top: 0;
  }
`;
