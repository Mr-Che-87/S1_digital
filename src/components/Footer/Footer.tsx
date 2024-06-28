import { Link } from "react-router-dom";
import styled from "styled-components"; // Импортируем styled-components
import BehanceLink from "../BehanceLink/BehanceLink";
import FooterLogo from "../FooterLogo/FooterLogo";
import VkLinkWhite from "../VkLinkWhite/VkLinkWhite";
import {
  AddressesBox,
  ChartTitle,
  ContactUs,
  Contacts,
  FooterBlock,
  FooterBottomBlock,
  FooterContactLink,
  FooterContainer,
  FooterInfoBlock,
  FooterLink,
  FooterNav,
  FooterText,
  FooterTopBlock,
  ItemTitle,
  LogoContainer,
  Schedule,
  ScheduleText,
  SocialLinksBox,
} from "./styles";

const Footer = () => {
  return (
    <FooterBlock id="footer">
      <LogoContainer>
        <FooterLogo />
      </LogoContainer>
      <FooterContainer>
        <FooterTopBlock>
          <FooterNav>
            <ItemTitle>Компания:</ItemTitle>
            <FooterLink to={"/services"}>Услуги</FooterLink>
            <FooterLink to={"/cases"}>Проекты</FooterLink>
            <FooterLink to={"/blogs"}>Блог</FooterLink>
            <FooterLink to={"/"}>Стажировка???</FooterLink>  {/* оставляем пока заглушкой?(впоследствии будет ссылка на отд-лендинг) или вообще убираем?*/}
          </FooterNav>
          <Contacts>
            <ItemTitle>Контакты:</ItemTitle>
            <FooterContactLink href="tel:+7 812 507-9366">
              +7 812 507-9366
            </FooterContactLink>
            <FooterContactLink href="tel:+7 995 911-5700">
              +7 995 911-5700
            </FooterContactLink>
          </Contacts>
          <Schedule>
            <ChartTitle>График работы:</ChartTitle>
            <ScheduleText>ПН-ПТ: 10:00-19:00 СБ,ВС: (Выходной)</ScheduleText>
          </Schedule>
          <AddressesBox>
            <ItemTitle>Наши Адреса:</ItemTitle>
            <FooterText>
              Россия, г. Санкт-Петербург, ул.Большая Морская 43
            </FooterText>
            <FooterText>Россия, г.Москва, Спартаковская площадь 10.</FooterText>
          </AddressesBox>
        </FooterTopBlock>
        <FooterBottomBlock>
          <ContactUs>
            <ChartTitle>Свяжитесь с нами:</ChartTitle>
            <FooterContactLink href="mailto:hello@s-one.ru">
              hello@s-one.ru
            </FooterContactLink>
            <SocialLinksBox>
              <VkLinkWhite />
              <BehanceLink />
            </SocialLinksBox>
          </ContactUs>
          <FooterInfoBlock>
            <ItemTitle>Информация:</ItemTitle>
            <FooterLink to={"/"}>Пользовательское соглашение</FooterLink>
            <FooterLink to={"/"}>Политика конфиденциальности</FooterLink>
          </FooterInfoBlock>
        </FooterBottomBlock>
      </FooterContainer>
    </FooterBlock>
  );
};

export default Footer;
