import {
  LinkBannerBox,
  LinkBannerBackground,
  LinkBannerContent,
  LinkBannerTitle,
  LinkBannerButtons,
} from "./styles";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import ApplicationForm from "../../../../components/ApplicationForm/ApplicationForm";

const LinkBanner = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/cases");
  };

  const [openPopUp, setOpenPopUp] = useState(false);
  const handlerForm = () => {
    setOpenPopUp(!openPopUp);
  };
  



  return (
    <LinkBannerBox>
      <LinkBannerBackground />
      <LinkBannerContent>
        <LinkBannerTitle>
        Мы точно знаем, что нужно делать, и не ведем долгих переговоров
        </LinkBannerTitle>
        <LinkBannerButtons>
          <Button type="bold" variant="" handler={handlerForm}>оставить заявку</Button>
          {openPopUp && <ApplicationForm onClose={handlerForm} />}  
          <Button type="bold" variant="" handler={handler}>примеры работ</Button>
        </LinkBannerButtons>
         
      </LinkBannerContent>  
    </LinkBannerBox>
  );
};

export default  LinkBanner;
