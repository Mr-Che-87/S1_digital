import styled from "styled-components";
export const EducationItemTitle = styled.h3`
  margin-top: 40px;
  max-width: 500px;
  background-clip: text;
  -webkit-background-clip: text;
`;
export const EducationItemText = styled.p`
  word-wrap: break-word;
  max-width: 500px;
  margin-top: 20px;
  margin-bottom: 40px;
`;
export const EducationTitleShell = styled.div`
  background-clip: text;
  -webkit-background-clip: text;
`;
export const EducationSubTitle = styled.p`
  margin-top: 20px;
`;
export const EducationItemBox = styled.article`
  padding: 40px 20px 60px 20px;
  border: 1px solid transparent;
  max-width: 540px;
  &:hover {
    border-image: ${(props) => props.theme.colors.gradient};
    border-image-slice: 1;
    ${EducationTitleShell} {
      background-image: ${({ theme }) => theme.colors.gradient};
      -webkit-text-fill-color: transparent;
    }
    ${EducationItemTitle} {
      background-image: ${({ theme }) => theme.colors.gradient};
      -webkit-text-fill-color: transparent;
    }
  }
`;
