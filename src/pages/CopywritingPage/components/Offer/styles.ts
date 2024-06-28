import styled from "styled-components";
export const Container = styled.article`
  margin-top: 180px;
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Title = styled.h2``;
export const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 139.99%;
`;
export const BottomTextContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 60px 80px;
  background: ${({ theme }) => theme.colors.white};
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
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const BottomText = styled.p`
  width: 380px;
  color: ${({ theme }) => theme.colors.black};
`;
