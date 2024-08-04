import styled from "styled-components";
export const BlogImgWrapper = styled.div`
position: relative; 
width: 340px; 
height: 260px;
  @media (max-width: 1024px) {
      width: 290px;
      height: 225px;
  }
  @media (max-width: 576px) {
    width: 245px;
    height: 190px;
  }
`;
export const BlogImg = styled.img`
  width: 340px;
  height: 260px;
  @media (max-width: 1024px) {
      width: 290px;
      height: 225px;
  }
  @media (max-width: 576px) {
    width: 245px;
    height: 190px;
  }
`;
export const BlogImgTitle = styled.h3`
   position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 54px 28px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;

    @media (max-width: 1024px) {
    padding: 46px 24px; 
    font-size: 17px; 
    line-height: 21px; 
    }
    @media (max-width: 576px) {
      padding: 43px 22px; 
      font-size: 16px; 
      line-height: 19px; 
    }
`;

export const BlogItemTitle = styled.h3`
  margin-top: 5px;
  width: 340px;
  height: 77px;
  overflow: hidden;
  background-clip: text;
  -webkit-background-clip: text;
  background-color: ${({ theme }) => theme.colors.black};
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;

  @media (max-width: 1024px) {
    width: 292px; 
    font-size: 17px; 
    line-height: 21px; 
  }
    @media (max-width: 700px) {
    height: auto; 
  }

  @media (max-width: 576px) {
    width: 269px; 
    font-size: 16px; 
    line-height: 19px; 
  }
`;
export const BlogItemText = styled.p`
  max-width: 340px;
  margin-top: 20px;
  margin-bottom: 60px;
  height: 250px;

  @media (max-width: 1024px) {
    max-width: 292px; 
   height: 330px;
  }
  @media (max-width: 576px) {
    max-width: 269px; 
    height: auto;
  }
`;
export const BlogDate = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const CaseTitleShell = styled.div`
  background-clip: text;
  -webkit-background-clip: text;
`;

export const BlogButtonWrapper = styled.article`
 // padding-top: 100px;
`;

export const BlogItemBox = styled.article`
  padding: 40px 20px 60px 20px;
  border: 1px solid transparent;
  max-width: 540px;
  &:hover {
    border-image: ${(props) => props.theme.colors.gradient};
    border-image-slice: 1;
    ${CaseTitleShell} {
      background-image: ${({ theme }) => theme.colors.gradient};
      -webkit-text-fill-color: transparent;
    }
    ${BlogItemTitle} {
      background-image: ${({ theme }) => theme.colors.gradient};
      -webkit-text-fill-color: transparent;
    }
  }
  @media (max-width: 1024px) { 
    width: 330px;
    padding: 34px 17px 51px 17px; 
  }
  @media (max-width: 576px) { 
    width: 280px;
    padding: 31px 16px 47px 16px;
  }
`;
