import styled from "styled-components";
interface StyledProps {
  $img?: string;
  $width?: string;
}
export const MakeOrderBox = styled.div<StyledProps>`
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
  margin-top: 140px;
  padding-top: 246px;
  padding-bottom: 245px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-image: url(${(props) => props.$img});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 140px;
`;
export const Title = styled.h1<StyledProps>`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 60px;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  max-width: ${(props) => (props.$width ? props.$width : "760px")};
`;
