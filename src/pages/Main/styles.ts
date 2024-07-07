import styled from "styled-components";
export const MainBox = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const AbsoluteBackground = styled.div`
  z-index: -100;
  position: absolute;
  width: 100%;
  height: 100%;
  //background-image: url(./images/background.svg);
  //background-repeat: no-repeat;
  //background-size: 110%;
  //background-position: center;
  top: 150px;
  left: 0;
  
  
`;


export const Lines = styled.div`
  width: 100%;
  height: 100%;
  display: block; /* Убирает отступы */
  position: relative; /* Для управления позиционированием */
  
   `;
