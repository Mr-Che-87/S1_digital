import styled from "styled-components";
export const PopUp = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;
export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: 120px;
  max-width: 980px;
`;
export const InputTop = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;
export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  align-items: center;
`;
export const FormTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
export const FormTitleText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 139.99%;
  text-transform: uppercase;
`;
export const RadioBlockTitle = styled.p`
  margin-top: 40px;
`;
export const RadioBlock = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 20px;
`;
export const FormRadio = styled.input`
  appearance: none;
`;
export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;
export const LabelBox = styled.label`
  display: flex;
`;
export const PersonalData = styled.p`
  margin-top: 10px;
  max-width: 300px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;



export const CloseButton = styled.button`
  position: absolute;
  top: 120px;
  right: 180px;
  width: 80px;
  height: 80px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseIcon = styled.span`
  font-size: 45px;
  color: white;
`;