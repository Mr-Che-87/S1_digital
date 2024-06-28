import styled from "styled-components";
export const MainBox = styled.main`
  position: relative;
`;
export const AbsoluteBackground = styled.div`
  z-index: -100;
  position: absolute;
  width: 100%;
  height: 1222px;
  background-image: url(./images/background.svg);
  background-repeat: no-repeat;
  background-size: 110%;
  background-position: center;
  top: 400px;
`;
