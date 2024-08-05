import styled from "styled-components";
export const TrustBox = styled.section`
  margin-top: 200px;
  padding-left: calc(50% - 590px);
  padding-right: calc(50% - 590px);
  @media (max-width: 1024px) {
    margin-top: 150px;
  }
  @media (max-width: 576px) {
    margin-top: 60px;
  }
`;
export const TrustTitleBox = styled.div`
  background-image: url("/images/trustBackground.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 180px;
  @media (max-width: 1024px) {
    background-size: 670px;
  }
  @media (max-width: 700px) {
    background-size: 500px;
    margin-bottom: 0;
  }
  @media (max-width: 576px) {
    background-image: none;
  }
`;
export const TrustTitle = styled.h1`
  padding-top: 45px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
  @media (max-width: 1024px) { 
    padding-top: 30px;
    font-size: 48px;
  }
  @media (max-width: 700px) {
    font-size: 40px;
    padding-top: 25px;
  }
  @media (max-width: 576px) {
    font-size: 32px;
  }
`;
export const TrustItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 40px;
  justify-content: center;
`;

export const TrustTextBox = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export const TrustText = styled.p`
  text-align: center;
  line-height: 33px;
  font-size: 26px;
  font-weight: 700;
  max-width: 700px;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;
export const ClientsBox = styled.div`
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 40px;
  column-gap: 20px;
  @media (max-width: 576px) {
    margin-top: 60px;
  }
  @media (max-width: 576px) {
    margin-top: 30px;
  }
`;
