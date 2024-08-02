import styled from "styled-components";

export const Shell = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  position: sticky; 
  top: 0;  //приклеиваем к верху страницы
  z-index: 1000; //видимость поверх контента
  padding: 1px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.white};
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const HeaderNav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;

  /*бургер-меню*/
  @media (max-width: 1024px) { 
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 8px;
    width: 200px;
    z-index: 1000;
  }
`;

/*бургер-меню*/
export const BurgerIcon = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
    padding-right: 30px;
  }
`;
