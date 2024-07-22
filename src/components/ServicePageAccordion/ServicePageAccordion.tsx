import { useState } from "react";
import {
  AccordionBox,
  HistoryBox,
  HistoryLink,
  StopFirst,
  StopSecond,
  StopThird,
  Svg,
  SvgBox,
  Text,
  Title,
} from "./styled";
import { useDispatch } from "react-redux";
import { setOpenServiceSlice } from "../../services/slices/openServiceSlice";

interface ServicePageAccordionProps {
  background: string;
  title: string;
  text: string;
  linkText: string;
  url: string;
}

const ServicePageAccordion = ({
  background,
  title,
  text,
  linkText,
  url,
}: ServicePageAccordionProps) => {
  const dispatch = useDispatch();
  const [openPage, setOpenPage] = useState(Boolean);
  const handler = () => {
    openPage === false ? setOpenPage(true) : setOpenPage(false);
  };
  dispatch(setOpenServiceSlice(openPage));
  return (
    <AccordionBox $background={background}>
      <HistoryBox>
        <HistoryLink to={"/"}>Главная</HistoryLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="8"
          viewBox="0 0 6 8"
          fill="none"
        >
          <path
            d="M1 7.5L5 4L1 0.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <HistoryLink to={"/services"}>Услуги</HistoryLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="8"
          viewBox="0 0 6 8"
          fill="none"
        >
          <path
            d="M1 7.5L5 4L1 0.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <HistoryLink to={url}>{linkText}</HistoryLink>
      </HistoryBox>
      <Title dangerouslySetInnerHTML={{ __html: title }}></Title>
      <Text>{text}</Text>
      <SvgBox>
        <Svg
          onClick={handler}
          xmlns="http://www.w3.org/2000/svg"
          width="232"
          height="232"
          viewBox="0 0 232 232"
          fill="none"
        >
          <path
            d="M116 68.2283V164.418"
            stroke="url(#paint0_linear_225_2355)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M164.095 116.323L116 164.418L67.9053 116.323"
            stroke="url(#paint1_linear_225_2355)"
            strokeWidth="6.80162"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_225_2355"
              x1="84.1372"
              y1="107.305"
              x2="154.476"
              y2="125.942"
              gradientUnits="userSpaceOnUse"
            >
              <StopFirst stopColor={openPage === false ? "white" : "#BD18CB"} />
              <StopSecond
                offset="0.489583"
                stopColor={openPage === false ? "white" : "#612DAC"}
              />
              <StopThird
                offset="1"
                stopColor={openPage === false ? "white" : "#8B4BED"}
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_225_2355"
              x1="84.1372"
              y1="107.305"
              x2="154.476"
              y2="125.942"
              gradientUnits="userSpaceOnUse"
            >
              <StopFirst stopColor={openPage === false ? "white" : "#BD18CB"} />
              <StopSecond
                offset="0.489583"
                stopColor={openPage === false ? "white" : "#612DAC"}
              />
              <StopThird
                offset="1"
                stopColor={openPage === false ? "white" : "#8B4BED"}
              />
            </linearGradient>
          </defs>
        </Svg>
      </SvgBox>
    </AccordionBox>
  );
};

export default ServicePageAccordion;