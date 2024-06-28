import styled from "styled-components";
import {
  StopEnd,
  StopStart,
  StopSvg,
} from "../../../../../../components/Attach/styles";
export const AttachInput = styled.input`
  display: none;
`;
export const AttachLabel = styled.label`
  margin-top: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  background-clip: text;
  -webkit-background-clip: text;
  display: flex;
  &:hover {
    background-image: ${({ theme }) => theme.colors.lightGradient};
    -webkit-text-fill-color: transparent;
    ${StopSvg} {
      stop-color: #DE24EE;
    }
    ${StopStart} {
      stop-color: #9246FF;
    }
    ${StopEnd} {
      stop-color: #A164FF;
    }
  }
  &:active {
    background-image: ${({ theme }) => theme.colors.RotateGradient};
    -webkit-text-fill-color: transparent;
    ${StopSvg} {
      stop-color: #bd18cb;
    }
    ${StopStart} {
      stop-color: #612dac;
    }
    ${StopEnd} {
      stop-color: #8b4bed;
    }
  }
`;
export const FormTitle = styled.h2`
  font-size: 32px;
  text-align: center;
`;
export const FormSubTitle = styled.h3`
  font-size: 20px;
  margin-top: 60px;
`;
export const FormStyled = styled.form`
  max-width: 1100px;
  padding: 40px 80px 72px 80px;
  border: 1px solid transparent;
  border-image: ${(props) => props.theme.colors.gradient};
  border-image-slice: 1;
`;
export const FormStyledBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const TextArea = styled.textarea`
  margin-top: 40px;
  padding: 20px 40px;
  font-size: 18px;
  resize: none;
  outline: none;
  width: 940px;
  height: 96px;
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
export const ButtonBox = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;
