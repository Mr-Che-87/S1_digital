import styled from "styled-components";
export const TrustBox = styled.section`
  margin-top: 210px;
`;
export const TrustTitleBox = styled.div`
  background-image: url("/images/trustBackground.svg");
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 180px;
`;
export const TrustTitle = styled.h2`
  padding-top: 100px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const TrustItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 40px;
  justify-content: center;
`;
export const TrustText = styled.p`
  text-align: center;
  line-height: 33px;
  font-size: 26px;
  font-weight: 700;
  max-width: 700px;
`;
export const ClientsBox = styled.div`
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 40px;
  column-gap: 20px;
`;
export const TrustTextBox = styled.div`
  display: flex;
  justify-content: center;
`;
