import styled from "styled-components";




export const PopUp = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  @media (max-width: 700px) {


  }

`;
export const FormContainer = styled.form`
 position: fixed;
 z-index: 1;
 width: 80%;
 // height: 95%;  
 max-width: 980px;
 max-height: 900px;  
 display: flex;
 flex-direction: column;
 padding: 25px;
 padding-bottom: 20px;
 background-color: ${({ theme }) => theme.colors.white};
`;
export const CloseButton = styled.button`
  position: absolute; 
  top: 0; 
  right: -50px; 
  width: 40px; 
  height: 40px; 
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CloseIcon = styled.span`
  font-size: 40px;
  color: white;
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
  margin-bottom: 20px;
  align-items: center;
`;
export const FormTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
export const FormTitleText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 139.99%;
`;
export const RadioBlockTitle = styled.p`
  margin-top: 15px;
  font-size: 16px;
`;
export const RadioBlock = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 15px;
`;
export const FormRadio = styled.input`
  appearance: none;
`;
export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
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

export const TextareaWrapper = styled.div`
  margin-top: 20px;

`;


export const ResponseMessage = styled.div<{ isError: boolean }>`
  color: ${({ isError }) => (isError ? "red" : "green")};
  font-size: 16px;
  text-align: center;
  //margin-top: 20px;
`;



