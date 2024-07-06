import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import VkLink from "../../../../components/VkLink/VkLink";
import {
  HeadingBox,
  HeadingDescription,
  HeadingDescriptionBox,
  HeadingSpan,
  HeadingSubTitle,
  HeadingTitle,
  HeadingServicesBox,
  ServicesDescription,
  VkBlock,
} from "./styles";

const Heading = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/services");
  };
  return (
    <HeadingBox>
      <HeadingTitle>
        <HeadingSpan>S1 DIGITAL</HeadingSpan> – агентство
      </HeadingTitle>
      <HeadingSubTitle>комплексного маркетинга</HeadingSubTitle>
      <HeadingDescriptionBox>
        <HeadingDescription>
          <HeadingServicesBox>
            <p>выводим бизнес на новый уровень прибыли</p>
            <Button type="bold" variant="short" handler={handler}>
              Наши услуги
            </Button>
          </HeadingServicesBox>
          <div>
            <p>Привет! Мы S1 Digital - агенство</p>
            <ServicesDescription>
              Развиваем конкурентоспособность продукта и привлекаем клиентов
              из всех каналов коммуникаций. Формируем известность и репутацию
              бренда, улучшаем работу отдела продаж.
            </ServicesDescription>
          </div>
        </HeadingDescription>
        <VkBlock as={Link} to={"https://m.vk.com/s1digital"}>
          <VkLink />
          <span>S1 digital</span>
        </VkBlock>
      </HeadingDescriptionBox>
    </HeadingBox>
  );
};

export default Heading;
