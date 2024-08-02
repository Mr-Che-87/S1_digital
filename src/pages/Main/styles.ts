import styled from "styled-components";
export const MainBox = styled.main`
  position: relative;
`;
export const AbsoluteBackground = styled.div`
  z-index: -10;
  position: relative;  //не получается зафиксировать по вертикали!!!
//top: 150px;
//left: 0;
//right: 0;
//width: 100%;
//overflow: hidden; 
`;


//Статичная линия прозапас:
export const LineStaticNew = styled.div`  
  position: absolute;
  z-index: -10; 
  top: 750px;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;  //высота в обяз
  overflow: hidden; 
  background-image: url('/images/line-background.svg');  
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;