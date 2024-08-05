import styled from "styled-components";

interface StylesProps {
  readonly $variant: string;
  readonly $isSpecial?: boolean;
}

export const TariffsItemBlock1 = styled.div<StylesProps>`
  display: flex;
  flex-direction: column;
  z-index: 1;
  border-radius: 8px;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px 1px rgba(51, 51, 51, 0.2);
  padding: 40px 30px;
  gap: 10px;
//align-items: flex-start; 
  background: ${(props) => (props.$isSpecial ? 'rgba(1, 1, 53, 1)' : '#FFFFFF')}; 

  @media (max-width: 1250px) {
    padding: calc(40px * 0.8) calc(30px * 0.8);
    gap: calc(10px * 0.8);
  }
`;



export const TariffsQuantity = styled.div<StylesProps>`
  font-size: 12px;
  align-self: self-end;
  color: ${(props) => (props.$isSpecial ? 'rgba(200, 200, 200)' : 'inherit')};

  @media (max-width: 1250px) {
    font-size: calc(12px * 0.8);
  }
`;

export const TariffsItem = styled.div<StylesProps>`
  font-size: 32px;
  font-family: 'OpenSansBold';
  padding-top: 10px;
  padding-left: 25px;
  color: ${(props) => (props.$isSpecial ? 'white' : 'inherit')};
  span {
      font-size: 32px;
      font-family: 'OpenSansBold';
      font-weight: bold;
      text-transform: uppercase;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: ${({ theme }) => theme.colors.gradient};
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 1250px) {
    font-size: calc(32px * 0.8);
    padding-top: calc(10px * 0.8);
    padding-left: calc(25px * 0.8);

    span {
      font-size: calc(32px * 0.8);
    }
  }
`;

export const TariffsEmployees = styled.p<StylesProps>`
  color: #333;
  font-size: 18px;
  font-family: 'OpenSansBold';
  line-height: 140%;
  padding-left: 25px;
  color: ${(props) => (props.$isSpecial ? 'white' : 'inherit')};

  @media (max-width: 1250px) {
    font-size: calc(18px * 0.8);
    padding-left: calc(25px * 0.8);
  }
`;

export const TariffsServicesList = styled.ul<StylesProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 25px;
  list-style-type: none;
  margin-bottom: 20px;
  color: ${(props) => (props.$isSpecial ? 'rgba(200, 200, 200)' : 'inherit')};
  li {
  border: 1px solid #D9D9D9;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px 20px;
  gap: 10px;
  color: ${(props) => (props.$isSpecial ? 'rgba(200, 200, 200)' : 'inherit')};
  }

  @media (max-width: 1250px) {
    font-size: 12px;
    gap: calc(10px * 0.8);
    padding: calc(10px * 0.8) calc(25px * 0.8);
    margin-bottom: calc(20px * 0.8);

    li {
      padding: calc(10px * 0.8) calc(20px * 0.8);
      gap: calc(10px * 0.8);
    }
  }
`;


export const TariffsItemBlock2 = styled.div<StylesProps>`
 display: flex;
 flex-direction: column;
 border-radius: 8px;
 border-top-left-radius: 0;
 border-top-right-radius: 0;
 box-shadow: 0px 4px 10px 0px rgba(51, 51, 51, 0.2);
 padding: 40px 30px 80px 30px;
 gap: 10px;
 background: ${(props) => (props.$isSpecial ? 'rgba(1, 1, 53, 1)' : '#FFFFFF')}; 

 @media (max-width: 1250px) {
    padding: calc(40px * 0.8) calc(30px * 0.8) calc(80px * 0.8) calc(30px * 0.8);
    gap: calc(10px * 0.8);
  }
`;

export const TariffsTitle = styled.h2<StylesProps>`
color: #333;
font-size: 18px;
font-family: 'OpenSansBold';
line-height: 140%;
border-bottom: 1px solid rgba(217, 217, 217, 1);
padding-bottom: 20px;
margin-bottom: 20px;
color: ${(props) => (props.$isSpecial ? 'white' : 'inherit')};
::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgba(217, 217, 217, 1);
    position: absolute;
    bottom: 0; //линия находится внизу отступа
    left: 0;
  }
@media (max-width: 1250px) {
    font-size: calc(18px * 0.8);
    padding-bottom: calc(20px * 0.8);
    margin-bottom: calc(20px * 0.8);
  }
`;

export const TariffsPointsList = styled.ul<StylesProps>`
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 40px;
  color: ${(props) => (props.$isSpecial ? 'white' : 'inherit')};
  li {
    margin-bottom: 20px;
    font-size: 18px;
    color: ${(props) => (props.$isSpecial ? 'rgba(200, 200, 200)' : 'inherit')};
  }

  @media (max-width: 1250px) {
    margin-left: calc(20px * 0.8);
    margin-bottom: calc(40px * 0.8);

    li {
      margin-bottom: calc(20px * 0.8);
      font-size: calc(18px * 0.8);
    }
  }
`;



export const TariffsItemContainer = styled.li<StylesProps>`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.$variant};
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: ${(props) => (props.$isSpecial ? 'rgba(200, 200, 200)' : 'white')};
  //АНИМАЦИЯ КОНФЛИКТУЕТ С ОТКРЫТИЕМ МОДАЛКИ!!!
  //transition: background-color 0.3s, transform 0.3s;
  //&:hover {
  //      opacity: 1;
  //      transform: scale(1.01);
  //    }  
  
  @media (max-width: 1250px) {
    max-width: calc(${(props) => props.$variant} * 0.8);
    margin-right: calc(20px * 0.8);
    margin-bottom: calc(20px * 0.8);
  }

  
`;


// export const TariffsButton = styled.button`
//   background-color: ${({ theme }) => theme.colors.primary};
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-top: 20px;
  
//   &:hover {
//     background-color: ${({ theme }) => theme.colors.primaryDark};
//   }
// `;



// export const ..... = styled.h2`
//   padding-top: 102px;
//    background-clip: text;
//    -webkit-background-clip: text;
//    background-image: ${({ theme }) => theme.colors.gradient};
//    -webkit-text-fill-color: transparent;
// `;
