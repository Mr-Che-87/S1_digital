import {
  ApplicationMenuBox,
  ApplicationMenuBackground,
  ApplicationMenuContent,
  ApplicationMenuTitle,
  ApplicationMenuButton,
} from "./styles";

import { useState } from "react";
import ApplicationForm from "../../../../components/ApplicationForm/ApplicationForm";
import Button from "../../../../components/Button/Button";

const ApplicationMenu = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  
  const handler = () => {
    setOpenPopUp(!openPopUp);
  };

  
  // const handler = () => {
  //   openPopUp === false ? setOpenPopUp(true) : setOpenPopUp(false);
  //   console.log(openPopUp);
  // };

  return (
    <ApplicationMenuBox>
      <ApplicationMenuBackground />
      <ApplicationMenuContent>
        <ApplicationMenuTitle>
        Оставьте заявку и мы все сделаем
        </ApplicationMenuTitle>
        <ApplicationMenuButton>
          <Button type="bold" variant="" handler={handler}>отправить заявку</Button>  
        </ApplicationMenuButton>
        {openPopUp && <ApplicationForm onClose={handler} />}
         
      </ApplicationMenuContent>  
    </ApplicationMenuBox>
  );
};

export default  ApplicationMenu;
