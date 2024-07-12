import styled from "styled-components";

export const RadioButtonBorder = styled.div`
  border: 1px solid transparent;
  border-radius: 3.6px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Shell = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  position: relative;
  border-radius: 3.6px;
  width: 30px;
  height: 30px;
  padding: 1px;
  margin-right: 20px;
  cursor: pointer;
`;

export const CheckedIndicator = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
`;
