import styled from "styled-components";

export const CaseTitle = styled.h3`
  margin-bottom: 10px;
  @media (max-width: 576px) {
    font-size: 1.125rem; 
  }
`;

export const CaseText = styled.p`
  @media (max-width: 576px) {
    font-size: 0.875rem; 
  }
`;

export const CaseImgBox = styled.img`
  margin-bottom: 20px;
  width: 540px;
  height: 420px; 
  object-fit: cover;
// background-repeat: no-repeat;
  @media (max-width: 1440px) {
    width: 430px;
    height: 335px;
  }
  @media (max-width: 1024px) {
    width: 300px;
    height: 240px;
  }
  @media (max-width: 576px) {
    width: 250px;  
    height: 200px;  
  }
`;
export const CaseTitleShell = styled.div`
  margin-bottom: 10px;
  background-clip: text;
  -webkit-background-clip: text;
`;

export const CaseInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1024px) {
    min-height: 220px;
  }
  @media (max-width: 576px) {
    min-height: 170px;
  }
`;
export const CaseTextBox = styled.div`
    margin-bottom: 40px;
`;
export const CaseBox = styled.article`
   max-width: 580px;
  max-height: 700px; 
  padding: 40px 20px 60px 20px;
  border: 1px solid transparent;
  &:hover {
    border-image: ${(props) => props.theme.colors.gradient};
    border-image-slice: 1;
    ${CaseTitleShell} {
      background-image: ${({ theme }) => theme.colors.gradient};
      -webkit-text-fill-color: transparent;
    }
  }
  @media (max-width: 1440px) {
    max-width: 460px;
    padding: 34px 17px 51px 17px;
  }
  @media (max-width: 1024px) {
    max-width: 330px;
    padding: 30px 15px 45px 15px;
  }
  @media (max-width: 576px) {
    max-width: 280px;
    padding: 27px 14px 40px 14px;
  }
`;
