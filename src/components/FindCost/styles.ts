import styled from "styled-components";
interface StyledProps {
  $img: string;
}
export const FindCostBox = styled.div<StyledProps>`
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
  margin-top: 140px;
  padding-top: 240px;
  padding-bottom: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${(props) => props.$img});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 140px;
`;
export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 60px;
`;
// пример пути background-image: url("./images/services/integratedMarketing/integratedMarketingMiddle.jpg");
