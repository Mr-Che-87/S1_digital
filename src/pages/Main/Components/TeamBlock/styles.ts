import styled from "styled-components";
export const TeamImg = styled.img`
  height: 460px;
  width: 360px;

  @media (max-width: 576px) {
    height: calc(460px * 0.7);
    width: calc(360px * 0.7);
  }
`;
export const TeamBlockTitle = styled.h3``;
export const TeamTitleShell = styled.div`
  background-clip: text;
  -webkit-background-clip: text;
`;
export const TeamText = styled.p`
  max-width: 360px;
  height:52px;
  margin-bottom:40px;
  @media (max-width: 576px) {
    max-width: calc(360px * 0.7);
  }
`;
export const TeamIconBox = styled.div`
  background-image: url("/icons/teamIcon.svg");
  background-repeat: no-repeat;
  position:absolute;
  bottom: 40px;
  right:20px;
  height: 63px;
  width: 43px;
  opacity: 0;
  transition: .3s all;
`;
export const TeamBlockBox = styled.article`
  border: 1px solid transparent;
  padding: 40px 20px;
  position: relative;
  &:hover {
    border-image: ${({ theme }) => theme.colors.gradient};
    border-image-slice: 1;
    ${TeamTitleShell} {
      background-image: ${({ theme }) => theme.colors.gradient};
      -webkit-text-fill-color: transparent;
    }
    ${TeamIconBox} {
      opacity: 1;
    }
  }
 @media (max-width: 576px) {
    padding-top: 20px;
  } 
`;
