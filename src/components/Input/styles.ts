import styled from "styled-components";

interface StylesProps {
  readonly $minWidth: string;
}

export const InputStyled = styled.input<StylesProps>`
  font-size: 18px;
  padding: 20px 40px;
  border: 1px solid #333;
  max-width: 540px;
  width: ${(props) => props.$minWidth};
  outline: none;
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

  @media (max-width: 1024px) {
    width: 360px;
    font-size: 16px;
    padding: 10px 15px;
  }
  @media (max-width: 576px) {
    width: 260px;
    font-size: 14px;
    padding: 10px;
  } 
`;

export const SelectStyled = styled.select<StylesProps>`
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

  @media (max-width: 1024px) {
    width: 360px;
    font-size: 16px;
    padding: 10px 15px;
  }
  @media (max-width: 576px) {
    width: 260px;
    font-size: 14px;
    padding: 12px;
    padding-left: 5px;
  } 
`;

export const TextAreaStyled = styled.textarea<StylesProps>`
  font-size: 18px;
  padding: 20px 40px;
  border: 1px solid #333;
  width: ${(props) => props.$minWidth};
  outline: none;
  max-width: 540px;
  min-height: 120px;
  resize: vertical; 
  overflow-y: auto; 
  box-sizing: border-box; 
  &:hover {
    border-image: ${(props) => props.theme.colors.gradient};
    border-image-slice: 1;
  }
  &:focus {
    color: #8D31CC;
    &::placeholder {
      color: #8D31CC;
    }
  }

  @media (max-width: 1024px) {
    width: 360px;
    font-size: 16px;
    padding: 10px 15px;
  }
  @media (max-width: 576px) {
    width: 260px;
    font-size: 14px;
    padding: 10px;
  } 
`;

