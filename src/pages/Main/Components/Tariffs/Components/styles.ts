import styled from "styled-components";



interface StylesProps {
  readonly $variant: string;
}
export const TariffsTitle = styled.h2`
  padding-top: 102px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;

export const TariffsItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  //padding-top: 40px;
`;


export const TariffsItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-style: normal;
  font-family: 'OpenSansBold';
  text-transform: uppercase;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;

export const TariffsItemTextBox = styled.div` `;

export const TariffsItemBoldText = styled.p`
  color: #333;
  font-size: 18px;
  font-family: 'OpenSansBold';
  line-height: 140%;
`;
export const TariffsItemText = styled.p<StylesProps>`
  color: #333;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  max-width: ${(props) => props.$variant};
  margin-top: 10px;
  word-break: break-word;
`;
