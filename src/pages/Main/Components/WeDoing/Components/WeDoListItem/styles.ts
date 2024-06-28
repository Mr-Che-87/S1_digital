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
export const WeDoItemTextBox = styled.div`
  padding-left: 50px;
`;
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
