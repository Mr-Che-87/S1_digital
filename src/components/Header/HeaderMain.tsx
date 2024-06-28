import { headerSectionsName } from "../../constans/textData";
import Logo from "../Logo/Logo";
import NavItem from "../NavItem/NavItem";
import { Header, HeaderNav, Shell } from "./styles";

const HeaderMain = () => {
  return (
    <Shell>
      <Header>
        <div>
          <Logo />
        </div>
        <HeaderNav>
          {headerSectionsName.map((item, index) => (
            <NavItem key={index} url={item.url} pathname={item.pathname} name={item.name} />
          ))}
        </HeaderNav>
      </Header>
    </Shell>
  );
};

export default HeaderMain;
