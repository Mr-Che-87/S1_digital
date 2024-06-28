import styled from "styled-components";
export const Container = styled.section`
  margin-top: 180px;
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
`;
export const ContentBox = styled.div`
  display: flex;
  gap: 21px;
  margin-top: 60px;
`;
export const ContentList = styled.ol`
  border: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  padding: 50px 40px;
  list-style-type: none;
  counter-reset: my-counter;
`;
export const ContentItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  margin-bottom: 20px;

  &:before {
    content: counter(my-counter);
    counter-increment: my-counter;
    padding-right: 20px;
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    font-family: OpenSansBold;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: ${({ theme }) => theme.colors.gradient};
    -webkit-text-fill-color: transparent;
  }
`;
export const ImgBox = styled.div`
  background-image: url("./images/services/marketingStrategy/marketingStrategyHeadingImg.jpg");
  width: 580px;
`;
export const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  margin-top: 20px;
`;
export const Span = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
