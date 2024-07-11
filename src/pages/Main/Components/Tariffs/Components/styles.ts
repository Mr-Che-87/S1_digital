import styled from "styled-components";

interface StylesProps {
  readonly $variant: string;
}


export const TariffsItemContainer = styled.li<StylesProps>`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.$variant};
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const TariffsItemBlock1 = styled.div``;
export const TariffsItem = styled.div`
  font-size: 24px;
  font-family: 'OpenSansBold';
  text-transform: uppercase;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const TariffsEmployees = styled.p`
  color: #333;
  font-size: 18px;
  font-family: 'OpenSansBold';
  line-height: 140%;
  margin: 10px 0;
`;

export const TariffsServicesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  list-style-type: none;
  li {
    background: #f0f0f0;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;



export const TariffsItemBlock2 = styled.div``;
export const TariffsTitle = styled.h2`
color: #333;
font-size: 18px;
font-family: 'OpenSansBold';
line-height: 140%;
margin: 10px 0;
`;

export const TariffsPointsList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  padding: 0;
  li {
    margin-bottom: 10px;
  }
`;


export const TariffsButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;



// export const ..... = styled.h2`
//   padding-top: 102px;
//    background-clip: text;
//    -webkit-background-clip: text;
//    background-image: ${({ theme }) => theme.colors.gradient};
//    -webkit-text-fill-color: transparent;
// `;
