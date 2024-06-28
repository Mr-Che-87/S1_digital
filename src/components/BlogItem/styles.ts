import styled from "styled-components";
export const BlogImg = styled.img`
  width: 340px;
  height: 260px;
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
`;
export const BlogItemText = styled.p`
  max-width: 340px;
  margin-top: 20px;
  margin-bottom: 60px;
  height: 242px;
`;
export const BlogDate = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const CaseTitleShell = styled.div`
  background-clip: text;
  -webkit-background-clip: text;
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
`;
