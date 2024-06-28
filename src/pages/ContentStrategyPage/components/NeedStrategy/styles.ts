import styled from "styled-components";
export const Container = styled.section`
  margin-top: 180px;
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
`;
export const Title = styled.h2`
  text-align: center;
`;
export const ContentBox = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;
export const ContentList = styled.ol`
  border: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  list-style-type: none;
  counter-reset: my-counter;
`;
export const ContentItem = styled.li`
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  font-family: OpenSansBold;
  &:before {
    content: counter(my-counter);
    counter-increment: my-counter;
    padding-right: 20px;
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    text-align: left;
    font-family: OpenSansBold;
  }
`;
export const TextBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  width: 580px;
`;
export const Span = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
