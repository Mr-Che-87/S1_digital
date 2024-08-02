import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
  FooterBottomWrapper,
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
  VkBlock,
  BehanceBlock
} from "./styles";

const Footer = () => {
  const { pathname } = useLocation();
  const addressesBoxRef = useRef<HTMLDivElement>(null);
  const footerBottomBlockRef = useRef<HTMLDivElement>(null);
  const footerTopBlockRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        if (addressesBoxRef.current && secondRowRef.current) {
          secondRowRef.current.appendChild(addressesBoxRef.current);
        }
      } else {
        if (addressesBoxRef.current && footerTopBlockRef.current) {
          footerTopBlockRef.current.appendChild(addressesBoxRef.current);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <FooterBlock id="footer">
      <LogoContainer>
        <FooterLogo />
      </LogoContainer>
      <FooterContainer>
        <FooterTopBlock ref={footerTopBlockRef}>
          <FooterNav>
            <ItemTitle>Компания:</ItemTitle>
            <FooterLink to="/services">Услуги</FooterLink>
            <FooterLink to="/cases">Проекты</FooterLink>
            <FooterLink to="/blogs">Блог</FooterLink>
            <FooterLink to="/">Стажировка</FooterLink>
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
            <ScheduleText>ПН-ПТ: 10:00-19:00 СБ, ВС (Выходной)</ScheduleText>
          </Schedule>
          <AddressesBox ref={addressesBoxRef}>
            <ItemTitle>Наши Адреса:</ItemTitle>
            <FooterText>
              Россия, г. Санкт-Петербург, ул.Большая Морская 43
            </FooterText>
            <FooterText>Россия, г.Москва, Спартаковская площадь 10.</FooterText>
          </AddressesBox>
        </FooterTopBlock>

        <FooterBottomBlock ref={footerBottomBlockRef}>
          <FooterBottomWrapper ref={secondRowRef}>
            <ContactUs>
              <ChartTitle>Свяжитесь с нами:</ChartTitle>
              <FooterContactLink href="mailto:hello@s-one.ru">
                hello@s-one.ru
              </FooterContactLink>
              <SocialLinksBox>
                <VkBlock as="a" href="https://m.vk.com/s1digital" target="_blank" rel="noopener noreferrer">
                  <VkLinkWhite />
                </VkBlock>
                <BehanceBlock as="a" href="https://www.behance.net/s1digital" target="_blank" rel="noopener noreferrer">
                  <BehanceLink />
                </BehanceBlock>
              </SocialLinksBox>
            </ContactUs>

            <FooterInfoBlock>
              <ItemTitle>Информация:</ItemTitle>
              <FooterLink to="/">Пользовательское соглашение</FooterLink>
              <FooterLink to="/">Политика конфиденциальности</FooterLink>
            </FooterInfoBlock>
          </FooterBottomWrapper>
        </FooterBottomBlock>
      </FooterContainer>
    </FooterBlock>
  );
};

export default Footer;
