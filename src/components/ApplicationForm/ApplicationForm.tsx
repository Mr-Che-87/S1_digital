import Button from "../Button/Button";
import Input from "../Input/Input";
import RadioButton from "../RadioButton/RadioButton";
import Telegram from "../Telegram/Telegram";
import WhatsApp from "../WhatsApp/WhatsApp";
import {
  ButtonBlock,
  FormContainer,
  FormRadio,
  FormTitle,
  FormTitleText,
  InputBlock,
  InputTop,
  LabelBox,
  PersonalData,
  PopUp,
  RadioBlock,
  RadioBlockTitle,
  TitleBox,
} from "./styles";

interface ApplicationFormProps {}

const ApplicationForm = () => {
  const handler = () => {};
  return (
    <PopUp>
    <FormContainer action="#">
      <div>
        <TitleBox>
          <FormTitle>Мы свяжемся</FormTitle>
          <FormTitleText>
            В рабочее время (с 10 до 19 по Москве) звоним почти сразу
          </FormTitleText>
        </TitleBox>
        <InputBlock>
          <InputTop>
            <Input id="name" minWidth="260px" placeholder="Имя*" type="text" />
            <Input
              id="name"
              minWidth="260px"
              placeholder="Телефон*"
              type="tel"
            />
          </InputTop>
          <Input
            id="direction"
            minWidth="540px"
            placeholder="Интересующие Услуги*"
            type="text"
          />
          <RadioBlockTitle>Свяжитесь со мной в:</RadioBlockTitle>
          <RadioBlock>
            <LabelBox htmlFor="whatsApp">
              <RadioButton />
              <WhatsApp />
              <FormRadio
                type="radio"
                name="messenger"
                id="whatsApp"
                value="1"
                required
              />
            </LabelBox>
            <LabelBox htmlFor="telegram">
              <RadioButton />
              <Telegram />
              <FormRadio
                type="radio"
                name="messenger"
                id="telegram"
                value="1"
                required
              />
            </LabelBox>
          </RadioBlock>
        </InputBlock>
      </div>
      <ButtonBlock>
        <Button variant="long" type="bold" handler={handler}>
          Отправить заявку
        </Button>
        <PersonalData>
          Нажимая кнопку, вы даете согласие на обработку персональных данных
        </PersonalData>
      </ButtonBlock>
    </FormContainer>
    </PopUp>
  );
};

export default ApplicationForm;
