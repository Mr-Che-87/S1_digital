import styled, { createGlobalStyle } from "styled-components";
export const FontStyles = createGlobalStyle`
@font-face {
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/OpenSans-Regular.ttf') format('truetype');
}
@font-face {
    font-family: 'OpenSansBold';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/OpenSans-Bold.ttf') format('truetype');
}
  `;
export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 18px;
    font-family: 'OpenSans';
  }
  * {
    box-sizing: border-box;
    padding:0;
    margin:0;
    text-decoration:none;
    color: ${({ theme }) => theme.colors.black};
  }
  h1 {
    font-family: 'OpenSansBold';
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 120px;
    text-transform: uppercase;
  }
  h2 {
    font-family: 'OpenSansBold';
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    text-transform: uppercase;
  }
  h3{
    font-family: 'OpenSansBold';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    text-transform: uppercase;
  }
  .span__gradient {
    background-clip: text;
  -webkit-background-clip: text;
  font-family: OpenSansBold;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
  }
  button, input {
    font-family: 'OpenSans';
  }
  p{
    font-family: 'OpenSans';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
  .line__break {
   height:10px;
  }
  .includes {
    font-family: 'OpenSansBold';
    margin-top:30px;
    margin-bottom:-40px;
  }
`;
export const Wrapper = styled.div`
  padding-left: calc(50% - 470px);
  padding-right: calc(50% - 601px);
  margin-bottom: 180px;
`;
