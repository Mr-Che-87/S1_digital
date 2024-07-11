import {
  ApplicationFormBox,
  ApplicationFormBackground,
  ApplicationFormContent,
  ApplicationFormTitle,
  ApplicationFormButton,
} from "./styles";

import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";

const ApplicationForm = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/cases");
  };
  



  return (
    <ApplicationFormBox>
      <ApplicationFormBackground />
      <ApplicationFormContent>
        <ApplicationFormTitle>
        Оставьте заявку и мы все сделаем
        </ApplicationFormTitle>
        <ApplicationFormButton>
          <Button type="bold" variant="">отправить заявку???</Button>  {/*КУДА ВЕДЁТ?*/}
        </ApplicationFormButton>
         
      </ApplicationFormContent>  
    </ApplicationFormBox>
  );
};

export default  ApplicationForm;
