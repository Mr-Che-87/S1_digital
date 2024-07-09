import styled from "styled-components";
export const ServicesBox = styled.section`
  padding-left: calc(50% - 590px);
  padding-right: calc(50% - 590px);
`;


export const ServicesTitleBox = styled.div`
  margin-top: 60px;
  background-image: url("/images/servicesBackground.svg");
  background-position: center;
  background-repeat: no-repeat;
  //background-size: contain;
  text-align: center;
  margin-bottom: 80px;
`;
export const ServicesTitle = styled.h1`
  padding-top: 80px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
`;
export const ServicesItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 40px;
  justify-content: center;
`;
