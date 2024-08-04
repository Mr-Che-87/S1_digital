import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterBlock = styled.footer`
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  
  @media (max-width: 700px) {
    justify-content: center; 
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 10px;

  @media (max-width: 1024px) {
    align-items: center;
  }
  @media (max-width: 700px) {
    align-items: center; 
    margin-left: 0;
  }
`;

export const FooterTopBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  width: 100%;

  @media (max-width: 1024px) {
    justify-content: space-between;
    padding-bottom: 30px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center; 
  }
`;

export const FooterBottomBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
  padding-bottom: 60px;
  width: 100%;

  @media (max-width: 1024px) {
    justify-content: space-between;
    align-items: flex-start;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterBottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  padding-right: 40px;
  padding-top: 127px;
  margin-left: 10px;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
    padding-top: 60px;
  }
  @media (max-width: 700px) {
    padding-right: 0;
    padding-top: 60px;
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

export const FooterInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 1024px) {
    padding-right: 50px;
  }
  @media (max-width: 700px) {
    width: 100%;
    align-items: center;
    margin-top: 40px;
    padding-right: 0; 
  }
`;

export const Schedule = styled.div`
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 40px;
    align-items: center; 
    padding-right: 0; 
  }
`;

export const AddressesBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 40px;
    align-items: center; 
    padding-right: 0; 
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  padding-right: 40px;

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 40px;
    align-items: center; 
    padding-right: 0; 
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 9px;
  flex-direction: column;
  flex-wrap: wrap;
  padding-right: 52px;

  @media (max-width: 700px) {
    width: 100%;
    align-items: center; 
    padding-right: 0; 
  }
`;

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
  padding-right: 182px;

  @media (max-width: 1024px) {
    padding-right: 60px;
  }
  @media (max-width: 700px) {
    width: 100%;
    align-items: center;
    padding-right: 0; 
  }
`;

export const SocialLinksBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FooterSubTitle = styled.h3`
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.lightGradient};
  -webkit-text-fill-color: transparent;
`;

export const ItemTitle = styled(FooterSubTitle)`
  margin-bottom: 10px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
`;

export const ChartTitle = styled(FooterSubTitle)`
  margin-bottom: 10px;
`;

export const FooterText = styled.p`
  max-width: 280px;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const FooterContactLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
`;

export const ScheduleText = styled(FooterText)`
  max-width: 164px;
`;

export const VkBlock = styled.div``;
export const BehanceBlock = styled.div``;
