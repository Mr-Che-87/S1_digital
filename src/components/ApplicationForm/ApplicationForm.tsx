import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import RadioButton from "../RadioButton/RadioButton";
import Telegram from "../Telegram/Telegram";
import WhatsApp from "../WhatsApp/WhatsApp";
import { serviceData } from "../../constans/serviceData";

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
  TextareaWrapper,
  ResponseMessage,
} from "./styles";

import PhoneInput from 'react-phone-input-2';  //валидация инпута телефона из react-hook-form
import 'react-phone-input-2/lib/style.css'; //базовые стили инпута телефона из react-hook-form
import './PhoneInputStyles.scss';  //для доп-стилизации инпута телефона

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
  const [isError, setIsError] = useState<boolean>(false);

  // Ручка для обычных инпутов:
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Ручка для радио-кнопки:
  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
    setFormData((prevData) => ({ ...prevData, preferredContact: value }));
  };

  // API отправки на почту 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Проверка обязательных полей
    const { name, phone, direction } = formData;
    if (!name || !phone || !direction) {
      setResponseMessage("Поля имя, телефон и интересующие услуги - обязательные");
      setIsError(true); // Установить ошибку как true
      return;
    }

    try {
      const response = await fetch("/sendMail.php", {  // Файл sendMail.php - в папке public!!
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.status === "success") {
        setResponseMessage("Ваша заявка отправлена! Скоро мы свяжемся с вами");
        setIsError(false); // Сбросить ошибку при успешной отправке
      } else {
        setResponseMessage(data.message || "Ошибка при отправке сообщения");
        setIsError(true); // Установить ошибку как true
      }
    } catch (error) {
      setResponseMessage("Ошибка при отправке сообщения");
      setIsError(true); // Установить ошибку как true при сетевой ошибке
    }
  };

  // Закрытие по Esc:
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
              placeholder="Имя"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
            />
           
           <div className="phoneInputWrapper">
            <PhoneInput
              
              country={'ru'}
              value={formData.phone}
              placeholder="Телефон"
              onChange={phone => setFormData((prevData) => ({ ...prevData, phone }))}
              inputProps={{
                id: 'phone', // для идентификации в DOM и стилей  (необяз)
                name: 'phone', // для отправки данных на сервер
                required: true,
                autoFocus: true,
              }}
            /> 
               </div>


            {/* <Input
              id="phone"
              minWidth="260px"
                          type="tel"
                placeholder="Телефон"
              value={formData.phone}
              onChange={handleInputChange}
            /> */}

          </InputTop>

          <Input
            id="direction"
            minWidth="540px"
            placeholder="Интересующие Услуги"
            type="select"
            value={formData.direction}
            onChange={handleInputChange}
            options={serviceData.map(service => service.title)}
          />
          <TextareaWrapper>
            <Input
              id="message"
              minWidth="540px"
              placeholder="Сообщение"
              type="textarea"
              value={formData.message}
              onChange={handleInputChange}
            />
          </TextareaWrapper>

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
          <Button variant="long" type="bold" handler={handleSubmit}>
            Отправить заявку
          </Button>
          <ResponseMessage isError={isError}>
            {responseMessage || (
              <PersonalData>
                Нажимая кнопку, вы даете согласие на обработку персональных данных
              </PersonalData>
            )}
          </ResponseMessage>
        </ButtonBlock>
      </FormContainer>
    </PopUp>
  );
};

export default ApplicationForm;
