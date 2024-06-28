import styled from "styled-components";
export const WeDoBox = styled.section`
  margin-top: 532px;
`;
export const WeDoTitleBox = styled.div`
  background-image: url("/images/WeDoBackGround.svg");
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
`;
export const WeDoTitle = styled.h2`
  padding-top: 102px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const WeDoList = styled.ol`
  background-image: url("/images/itemListBackground.svg");
  background-position: 47% 50%;
  background-repeat: no-repeat;
  list-style-type: none;
  counter-reset: my-counter;
  margin-top: 120px;
  max-height: 440px;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  padding-left: calc(50% - 690px);
  padding-right: calc(50% - 690px);
  @media (max-width: 1024px) {
    max-height: initial;
  }
`;
