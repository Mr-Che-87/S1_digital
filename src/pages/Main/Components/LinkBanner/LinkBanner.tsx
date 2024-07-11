import {
  LinkBannerBox,
  LinkBannerBackground,
  LinkBannerContent,
  LinkBannerTitle,
  LinkBannerButtons,
} from "./styles";

import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";

const LinkBanner = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/cases");
  };
  



  return (
    <LinkBannerBox>
      <LinkBannerBackground />
      <LinkBannerContent>
        <LinkBannerTitle>
        Мы точно знаем, что нужно делать, и не ведем долгих переговоров
        </LinkBannerTitle>
        <LinkBannerButtons>
          <Button type="bold" variant="">история болезни???</Button>  {/*КУДА ВЕДЁТ?*/}
          <Button type="bold" variant="" handler={handler}>примеры работ</Button>
        </LinkBannerButtons>
         
      </LinkBannerContent>  
    </LinkBannerBox>
  );
};

export default  LinkBanner;
