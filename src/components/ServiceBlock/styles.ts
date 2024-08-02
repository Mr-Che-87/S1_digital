import styled from "styled-components";
export const ServiceTitle = styled.h3`
  margin-bottom: 20px;
`;
export const ServiceTitleShell = styled.div`
  background-clip: text;
  -webkit-background-clip: text;
`;
export const ServiceText = styled.p`
  margin-bottom: 80px;
  max-width: 330px;
  min-height: 160px;
`;
export const ServiceBox = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  width: 380px;
  padding: 40px 20px 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    border-image: ${(props) => props.theme.colors.gradient};
    border-image-slice: 1;
    ${ServiceTitleShell} {
      background-image: ${({ theme }) => theme.colors.gradient};
      -webkit-text-fill-color: transparent;
    }
  }
  @media (max-width: 1024px) { 
    width: 330px;
  }
  @media (max-width: 576px) { 
    width: 300px;
  }
`;
