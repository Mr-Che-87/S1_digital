import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import {
  ServiceBox,
  ServiceText,
  ServiceTitle,
  ServiceTitleShell,
} from "./styles";

interface ServiceBlockProps {
  title: string;
  text: string;
  url: string;
  variant?: string;
}

const ServiceBlock = ({ title, text, url}: ServiceBlockProps) => {
  const navigate = useNavigate();
  const handler = () => {
    navigate(url);
  };
  return (
    <ServiceBox>
      <ServiceTitleShell>
        <ServiceTitle>{title}</ServiceTitle>
      </ServiceTitleShell>
      <ServiceText>{text}</ServiceText>
      <div>
        <Button type="normal" handler={handler} variant="short">
          Подробнее
        </Button>
      </div>
    </ServiceBox>
  );
};

export default ServiceBlock;
