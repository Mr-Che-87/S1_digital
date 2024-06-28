import styled from "styled-components";

export const Container = styled.div`
  margin-top: 120px;
  display: flex;
  gap: 20px;
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 24px;
  max-width: 580px;
  border: 1px solid black;
  padding: 40px;
`;
export const TextBoxTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const ImgBox = styled.div`
  background-image: url("./images/services/contentMarketing/contentMarketingHeading.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 580px;
  height: 472px;
`;
