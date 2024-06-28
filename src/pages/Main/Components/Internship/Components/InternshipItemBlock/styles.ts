import styled from "styled-components";
export const InternshipItemBox = styled.div`
  display: flex;
  flex-direction:column;
  padding: 30px 35px 166px 35px;
  max-width: 540px;
  border: 1px solid transparent;
  border-image: ${(props) => props.theme.colors.gradient};
  border-image-slice: 1;
`;
export const InternshipItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-style: normal;
  font-family: "OpenSansBold";
  text-transform: uppercase;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;
  &:before {
    padding-right: 20px;
    content: counter(my-counter);
    counter-increment: my-counter;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: ${({ theme }) => theme.colors.gradient};
    -webkit-text-fill-color: transparent;
    font-size: 64px;
    font-family: "OpenSansBold";
  }
`;
