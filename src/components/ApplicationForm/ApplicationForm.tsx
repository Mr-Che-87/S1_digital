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

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    direction: "",
    message: "",
    preferredContact: "",
  });
  const [responseMessage, setResponseMessage] = useState<string>("");

  //ручка для обычных инпутов:
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  //ручка для радио-кнопки:
  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
    setFormData((prevData) => ({ ...prevData, preferredContact: value }));
  };

  //API отправки на почту 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  
    const response = await fetch("/sendMail.php", {  //файл sendMail.php - в папке public!!
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.status === "success") {
      setResponseMessage("Сообщение успешно отправлено.");
    } else {
      setResponseMessage(data.message || "Ошибка при отправке сообщения.");
    }
  };

  //закрытие по Esc:
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
              <Input 
                id="name" 
                minWidth="260px" 
                placeholder="Имя*" 
                type="text" 
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input 
                id="phone" 
                minWidth="260px" 
                placeholder="Телефон*" 
                type="tel" 
                value={formData.phone}
                onChange={handleInputChange}
              />
            </InputTop>
            <Input 
              id="direction" 
              minWidth="540px" 
              placeholder="Интересующие Услуги*" 
              type="text"
              value={formData.direction}
              onChange={handleInputChange} 
            />
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
          <Button variant="long" type="bold" handler={(e) => handleSubmit(e)}>  {/*handler={handleSubmit}  или  handler={() => {handleSubmit}}  */}
            Отправить заявку
          </Button>
          <PersonalData>
            Нажимая кнопку, вы даете согласие на обработку персональных данных
          </PersonalData>
        </ButtonBlock>
        {responseMessage && <div>{responseMessage}</div>}
      </FormContainer>
    </PopUp>
  );
};

export default ApplicationForm;


