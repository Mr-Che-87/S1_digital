import styled from "styled-components";
export const InternshipBox = styled.section`
  margin-top: 180px;
`;
export const InternshipTitleBox = styled.div`
  background-image: url("/images/internshipBackground.svg");
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  margin-bottom: 60px;
  margin-top: 180px;
`;
export const InternshipTitle = styled.h2`
  padding-top: 130px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const InternshipText = styled.p`
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  line-height: 26px;
`;
export const InternshipList = styled.ol`
  background-repeat: no-repeat;
  list-style-type: none;
  counter-reset: my-counter;
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
