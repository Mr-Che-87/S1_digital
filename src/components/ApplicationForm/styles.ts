import styled from "styled-components";




export const PopUp = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: auto;  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const FormContainer = styled.form`
 position: relative;
 z-index: 1;
 width: 60%;
 max-width: 980px;
 max-height: 900px;  
 //overflow-y: auto;   //не работает - CloseButton становится невидимым 
 //overflow-x: hidden;  //не работает - CloseButton становится невидимым 
 display: flex;
 flex-direction: column;
 padding: 25px;
 padding-bottom: 20px;
 background-color: ${({ theme }) => theme.colors.white};
 
 @media (max-width: 1024px) {
  max-width: 560px;
  width: 70%;
 } 
 @media (max-width: 576px) {
  max-width: 400px;
  width: 90%;
 } 
`;
export const CloseButton = styled.button`
  position: absolute; 
  z-index: 1100;
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
   @media (max-width: 700px) {
    right: 0;
    top: 5px; 
  } 
  `;
export const CloseIcon = styled.span`
  font-size: 40px;
  color: white;
  @media (max-width: 700px) {
    font-size: 25px;
    color: black; 
  } 
`;



export const InputTop = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
  } 
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
  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 576px) {
    font-size: 22px;
  }  
`;
export const FormTitleText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 139.99%;
  @media (max-width: 1024px) {
    font-size: 16px;
    text-align: center;
  } 
  @media (max-width: 576px) {
    font-size: 14px;
  }  
`;
export const RadioBlockTitle = styled.p`
  margin-top: 15px;
  font-size: 16px;
  @media (max-width: 576px) {
    font-size: 14px;
  }  
`;
export const RadioBlock = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 15px;

  @media (max-width: 700px) {
  flex-direction: column;
  gap: 20px;
 } 
`;
export const FormRadio = styled.input`
  appearance: none;
`;
export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  @media (max-width: 700px) {
    margin-top: 25px;
 } 
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
  @media (max-width: 1024px) {
    font-size: 14px;
  } 
  @media (max-width: 576px) {
    font-size: 12px;
  } 
`;

export const TextareaWrapper = styled.div`
  margin-top: 20px;

`;


export const ResponseMessage = styled.div<{ isError: boolean }>`
  color: ${({ isError }) => (isError ? "red" : "green")};
  font-size: 16px;
  text-align: center;
  //margin-top: 20px;
  @media (max-width: 1024px) {
    font-size: 14px;
  } 
  @media (max-width: 576px) {
    font-size: 12px;
  } 
`;



