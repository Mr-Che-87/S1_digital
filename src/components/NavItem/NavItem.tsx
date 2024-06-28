import { Link } from "react-router-dom";
import { NavItemButtonLink } from "./styles";
interface NavItemProps {
  url: string;
  name: string;
  pathname: string;
}

const NavItem = ({ url, name, pathname }: NavItemProps) => {
  const params = window.location.pathname;
  return (
    <NavItemButtonLink $params={params} $pathname={pathname} as={Link} to={url}>
      {name}
    </NavItemButtonLink>
  );
};

export default NavItem;
