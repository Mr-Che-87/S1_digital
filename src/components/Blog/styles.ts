import styled from "styled-components";
export const BlogBox = styled.section`
  margin-top: 60px;
  padding-left: calc(50% - 620px);
  padding-right: calc(50% - 620px);
`;
export const BlogTitleBox = styled.div`
  background-image: url("./images/blogBackground.svg");
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  margin-bottom: 180px;
  margin-top: 60px;
`;
export const BlogTitle = styled.h2`
  padding-top: 130px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const BlogText = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
`;
export const BlogItemsBox = styled.div`
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 40px;
  justify-content: center;
`;
