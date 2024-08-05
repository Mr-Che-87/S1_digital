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
  HeadingDescription2,
  ServicesDescription,
  VkBlock,
  MdashSpan,
  DescriptionWrapper,
  HeadingNoSpan,
  HeadingMobSubTitle,
} from "./styles";

const Heading = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/services");
  };
  return (
    <HeadingBox>
      <HeadingTitle>
        <HeadingSpan>S1 DIGITAL </HeadingSpan>
        <MdashSpan>&mdash;</MdashSpan> {/*&emsp;*/}
        <HeadingNoSpan>агентство</HeadingNoSpan>    
      </HeadingTitle>
      <HeadingSubTitle>комплексного маркетинга</HeadingSubTitle>
      <HeadingMobSubTitle>агентство комплексного маркетинга</HeadingMobSubTitle>

      <HeadingDescriptionBox>
        <HeadingDescription>
            <HeadingServicesBox>
              <p>Загрузим ваш отдел продаж</p>
              <Button type="bold" variant="short" handler={handler}>
                Наши услуги
              </Button>
            </HeadingServicesBox>
          </HeadingDescription>
          
          <HeadingDescription2>
        <VkBlock as={Link} to={"https://m.vk.com/s1digital"}>
          <VkLink />
          <span>S1 digital</span>
        </VkBlock>
        <DescriptionWrapper>
            <p>Привет! Мы S1 Digital - агентство</p>
            <ServicesDescription>
              Развиваем конкурентоспособность продукта и привлекаем клиентов
              из всех каналов коммуникаций. Формируем известность и репутацию
              бренда, улучшаем работу отдела продаж.
            </ServicesDescription>
        </DescriptionWrapper>
          </HeadingDescription2>
              
      </HeadingDescriptionBox>
    </HeadingBox>
  );
};

export default Heading;
