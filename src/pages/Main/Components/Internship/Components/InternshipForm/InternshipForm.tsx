import Attach from "../../../../../../components/Attach/Attach";
import Button from "../../../../../../components/Button/Button";
import Input from "../../../../../../components/Input/Input";
import {
  AttachInput,
  AttachLabel,
  ButtonBox,
  FormStyled,
  FormStyledBox,
  FormSubTitle,
  FormTitle,
  TextArea,
} from "./styles";

const InternshipForm = () => {
  return (
    <FormStyled action="submit">
      <FormTitle>Ждем тебя на стажировке в S1</FormTitle>
      <FormSubTitle>Контактная информация</FormSubTitle>
      <FormStyledBox>
        <Input id="name" minWidth="260px" placeholder="Имя*" type="text" />
        <Input id="surname" minWidth="260px" placeholder="Фамилия*" type="text" />
        <Input id="directions"
          minWidth="380px"
          placeholder="Интересующее направление*"
          type="text"
        />
        <Input id="Telegram" minWidth="260px" placeholder="Телеграм*" type="text" />
        <Input id="email"  minWidth="260px" placeholder="Почта*" type="email" />
        <Input id="city" minWidth="380px" placeholder="Ваш город" type="text" />
      </FormStyledBox>
      <AttachInput type="file" name="file" id="input__file" />
      <AttachLabel htmlFor="input__file">
        <span>
          <Attach />
        </span>
        <span>Прикрепить резюме*</span>
      </AttachLabel>
      <TextArea id="message" placeholder="Сообщение"></TextArea>
      <ButtonBox>
        <Button type="bold" variant="long">
          Отправить заявку
        </Button>
      </ButtonBox>
    </FormStyled>
  );
};

export default InternshipForm;
