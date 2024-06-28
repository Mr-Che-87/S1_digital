import styled from "styled-components";
export const Container = styled.article`
  margin-top: 140px;
  margin-bottom: -80px;
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
`;
export const TopContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
  gap: 120px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Title = styled.h2`
  width: 480px;
`;
export const Text = styled.p`
  width: 580px;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
`;
export const BottomTextContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 60px 80px;
`;
export const BottomTextBox = styled.div`
  display: flex;
  padding-right: 60px;
  padding-left: 60px;
  gap: 20px;
  &:nth-child(1),
  &:nth-child(3) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
  &:nth-child(3),
  &:nth-child(4) {
    margin-top: 40px;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
`;
export const BottomTitle = styled.h3`
  width: 300px;
  margin-bottom: 10px;
`;
export const BottomText = styled.p`
  width: 380px;
  color: ${({ theme }) => theme.colors.black};
  &:nth-child(1) {
    height: 122px;
  }
  &:nth-child(2) {
    height: 88px;
  }
  &:nth-child(3) {
    height: 66px;
  }
  &:nth-child(4) {
    height: 110px;
  }
`;
export const Span = styled.span`
  font-family: "OpenSans";
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 5px;
`;
export const PriceBox = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  text-align: left;
  margin-top: 40px;
`;
