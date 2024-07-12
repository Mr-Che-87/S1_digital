import styled from "styled-components";
interface StylesProps {
  readonly $variant: string;
}
export const WeDoTitle = styled.h2`
  padding-top: 102px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;

export const WeDoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  //padding-top: 40px;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
        opacity: 1;
        transform: scale(1.05);
      }
`;


export const WeDoItem = styled.li`
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
  &:before {
    padding-right: 10px;
    content: counter(my-counter);
    counter-increment: my-counter;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: ${({ theme }) => theme.colors.gradient};
    -webkit-text-fill-color: transparent;
    font-size: 64px;
    font-family: 'OpenSansBold';
  }
`;

export const WeDoItemTextBox = styled.div` `;

export const WeDoItemBoldText = styled.p`
  color: #333;
  font-size: 18px;
  font-family: 'OpenSansBold';
  line-height: 140%;
`;
export const WeDoItemText = styled.p<StylesProps>`
  color: #333;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  max-width: ${(props) => props.$variant};
  margin-top: 10px;
  word-break: break-word;
`;
