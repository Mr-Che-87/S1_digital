import styled from "styled-components";
export const BlogBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 180px;
  padding-left: calc(50% - 620px);
  padding-right: calc(50% - 620px);
`;
export const BlogTitleBox = styled.div`
  background-image: url("./images/blogBackground.svg");
  background-position: center;
  background-repeat: no-repeat;
  //background-size: contain;
  text-align: center;
  margin-bottom: 20px;
  //margin-top: 60px;
`;
export const BlogTitle = styled.h1`
  padding-top: 75px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const BlogText = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  text-transform: uppercase;
  margin-bottom: 80px;
`;

export const BlogNavMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 10px 40px 10px;
  //margin-bottom: 40px;
`;
export const BlogNavButton = styled.button`
  box-sizing: border-box;
  padding: 10px 20px;
  gap: 10px;
  border: 1px solid #333333;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  &:hover {
    color: violet;
    border-image: ${({ theme }) => theme.colors.gradient};
    border-image-slice: 1;
    //background-image: ${({ theme }) => theme.colors.gradient};
  }
`;

export const BlogItemsBox = styled.div`
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
  //margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 40px;
  justify-content: center;
`;


export const BlogButton = styled.div`
padding-top: 80px;
align-self: center;
`;
