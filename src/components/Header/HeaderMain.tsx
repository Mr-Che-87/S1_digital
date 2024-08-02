import { useState } from "react";
import { headerSectionsName } from "../../constans/textData";
import Logo from "../Logo/Logo";
import NavItem from "../NavItem/NavItem";
import { Header, HeaderNav, Shell, BurgerIcon } from "./styles";

const HeaderMain = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <Shell>
      <Header>
        <div>
          <Logo />
        </div>
        <BurgerIcon onClick={toggleBurgerMenu}>
          ☰
        </BurgerIcon>
        <HeaderNav isOpen={isBurgerOpen}>
          {headerSectionsName.map((item, index) => (
            <NavItem key={index} url={item.url} pathname={item.pathname} name={item.name} />
          ))}
        </HeaderNav>
      </Header>
    </Shell>
  );
};

export default HeaderMain;
