import styled from "styled-components";
export const EducationBox = styled.section`
  margin-top: 180px;
`;
export const EducationTitleBox = styled.div`
  background-image: url("/images/educationBackground.svg");
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  margin-bottom: 60px;
  margin-top: 180px;
`;
export const EducationTitle = styled.h2`
  padding-top: 130px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const EducationText = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;
export const EducationItemsBox = styled.div`
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 40px;
  justify-content: center;
`;
