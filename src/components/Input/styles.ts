import styled from "styled-components";
interface StylesProps {
  readonly $minWidth: string;
}
export const InputStyled = styled.input<StylesProps>`
  font-size: 18px;
  padding: 20px 40px;
  border: 1px solid #333;
  width: ${(props) => props.$minWidth};
  outline: none;
  max-width: 540px;
  &:hover {
    border-image: ${(props) => props.theme.colors.gradient};
    border-image-slice: 1;
  }
  &:focus {
    background-clip: text;
    -webkit-background-clip: text;
    background-image: ${({ theme }) => theme.colors.gradient};
    -webkit-text-fill-color: transparent;
  }
`;
