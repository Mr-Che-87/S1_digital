import { useState, useEffect } from "react";
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
  CloseButton,
  CloseIcon,
} from "./styles";

interface ApplicationFormProps {
  onClose: () => void;
}

const ApplicationForm = ({ onClose }: ApplicationFormProps) => {
  const [selectedRadio, setSelectedRadio] = useState<string>("");

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <PopUp>
      <FormContainer action="#">
        <CloseButton onClick={onClose}>
          <CloseIcon>✕</CloseIcon>
        </CloseButton>
    
          <TitleBox>
            <FormTitle>Мы свяжемся</FormTitle>
            <FormTitleText>
              В рабочее время (с 10 до 19 по Москве) звоним почти сразу
            </FormTitleText>
          </TitleBox>
          <InputBlock>
            <InputTop>
              <Input id="name" minWidth="260px" placeholder="Имя*" type="text" />
              <Input id="name" minWidth="260px" placeholder="Телефон*" type="tel" />
            </InputTop>
            <Input id="direction" minWidth="540px" placeholder="Интересующие Услуги*" type="text" />
            <RadioBlockTitle>Свяжитесь со мной в:</RadioBlockTitle>
            <RadioBlock>
              <LabelBox htmlFor="whatsApp">
                <RadioButton 
                  checked={selectedRadio === "whatsApp"} 
                  onClick={() => handleRadioChange("whatsApp")} 
                />
                <WhatsApp />
                <FormRadio 
                  type="radio" 
                  name="messenger" 
                  id="whatsApp" 
                  value="whatsApp" 
                  checked={selectedRadio === "whatsApp"} 
                  onChange={() => handleRadioChange("whatsApp")} 
                  required 
                />
              </LabelBox>
              <LabelBox htmlFor="telegram">
                <RadioButton 
                  checked={selectedRadio === "telegram"} 
                  onClick={() => handleRadioChange("telegram")} 
                />
                <Telegram />
                <FormRadio 
                  type="radio" 
                  name="messenger" 
                  id="telegram" 
                  value="telegram" 
                  checked={selectedRadio === "telegram"} 
                  onChange={() => handleRadioChange("telegram")} 
                  required 
                />
              </LabelBox>
            </RadioBlock>
          </InputBlock>
        
        <ButtonBlock>
          <Button variant="long" type="bold" handler={() => {}}>
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
