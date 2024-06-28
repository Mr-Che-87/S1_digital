import styled from "styled-components";

export const Container = styled.article`
  margin-top: 120px;
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
  background: ${({ theme }) => theme.colors.darkBlue};
  padding-top: 60px;
  padding-bottom: 80px;
`;
export const BottomTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  padding: 40px 80px;
`;
export const BottomTextBox = styled.div`
  display: flex;
  &:nth-child(1) {
    width: 224px;
  }
  &:nth-child(2) {
    width: 300px;
  }
  &:nth-child(3) {
    width: 410px;
  }
`;
export const BottomContainer = styled.div``;
export const BottomItem = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.white};

  &:nth-child(2) {
    height: 228px;
    padding-top: 38px;
  }
  &:nth-child(3) {
    padding-top: 21px;
    height: 156px;
  }
  &:nth-child(4) {
    padding-top: 20px;
    height: 104px;
  }
`;
export const BottomTitle = styled.h3`
  height: 48px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
export const BottomText = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;
