import SeoTextsIcon from "../SeoTextsIcon/SeoTextsIcon";
import SocialIcon from "../SocialIcon/SocialIcon";
import SupportIcon from "../SupportIcon/SupportIcon";
import TranslationIcon from "../TranslationIcon/TranslationIcon";
import {
  TopContainer,
  BottomTextContainer,
  BottomTextBox,
  BottomTitle,
  BottomText,
  Title,
  Container,
  TitleContainer,
} from "./styles";

const Offer = () => {
  return (
    <Container>
      <TopContainer>
        <Title>Что мы вам предлагаем</Title>
      </TopContainer>
        <BottomTextContainer>
          <BottomTextBox>
            <div>
              <TitleContainer>
                <SupportIcon /> <BottomTitle>Поддержка сайта</BottomTitle>
              </TitleContainer>
              <BottomText>
                Создание информационных и новостных статей в блог
              </BottomText>
            </div>
          </BottomTextBox>
          <BottomTextBox>
            <div>
              <TitleContainer>
                <SeoTextsIcon />
                <BottomTitle>SEO-тексты для продвижения</BottomTitle>
              </TitleContainer>
              <BottomText>Оптимизируем тексты для страниц сайта</BottomText>
            </div>
          </BottomTextBox>
          <BottomTextBox>
            <div>
              <TitleContainer>
                <SocialIcon />
                <BottomTitle>
                  Разработка контента для социальных сетей
                </BottomTitle>
              </TitleContainer>
              <BottomText>
                Создание качественного материала для постов в социальных сетях
              </BottomText>
            </div>
          </BottomTextBox>
          <BottomTextBox>
            <div>
              <TitleContainer>
                <TranslationIcon />
                <BottomTitle>Услуги переводчика</BottomTitle>
              </TitleContainer>
              <BottomText>Перевод сайта, текстов для лендингов</BottomText>
            </div>
          </BottomTextBox>
        </BottomTextContainer>
    </Container>
  );
};

export default Offer;
