import styled from "styled-components";

export const CaseTitle = styled.h3`
  margin-bottom: 10px;
`;
export const CaseText = styled.p``;
export const CaseImgBox = styled.img`
  margin-bottom: 20px;
  width: 540px;
  height: 420px; 
  object-fit: cover;
// background-repeat: no-repeat;
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
`;
