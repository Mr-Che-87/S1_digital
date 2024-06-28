import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterBlock = styled.footer`
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const FooterTopBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
`;
export const FooterBottomBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
  padding-bottom: 60px;
`;
export const InfoAddressesBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const LogoContainer = styled.div`
  padding-right: 40px;
  padding-top: 127px;
`;
export const FooterInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;
export const Schedule = styled.div`
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;
export const AddressesBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;
export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  padding-right: 40px;
`;
export const FooterNav = styled.nav`
  display: flex;
  gap: 9px;
  flex-direction: column;
  flex-wrap: wrap;
  padding-right: 52px;
`;
export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
  padding-right: 182px;
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
  line-height: 120%; /* 24px */
  text-transform: uppercase;
`;
export const ChartTitle = styled(FooterSubTitle)`
  margin-bottom: 10px;
`;
export const FooterText = styled.p`
  max-width: 280px;
  color: ${({ theme }) => theme.colors.white};
`;
export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
`;
export const FooterContactLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
`;
export const ScheduleText = styled(FooterText)`
  max-width: 164px;
`;
