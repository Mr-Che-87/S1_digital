import {
  BottomText,
  BottomTextBox,
  BottomTextContainer,
  BottomTitle,
  Container,
  PriceBox,
  Span,
  Title,
  TopContainer,
} from "./styles";

const Price = () => {
  return (
    <article>
      <Container>
        <TopContainer>
          <Title>Стоимость</Title>
        </TopContainer>
        <BottomTextContainer>
          <BottomTextBox>
            <div>
              <BottomTitle>Лендинг</BottomTitle>
              <BottomText>Продвижение одного товара или услуги.</BottomText>
              <PriceBox>270 000 ₽</PriceBox>
            </div>
          </BottomTextBox>
          <BottomTextBox>
            <div>
              <BottomTitle>Локальный бизнес</BottomTitle>
              <BottomText>
                Продвижение офлайн-точек. Геолокационная реклама в социальных
                сетях, поисковых системах и медийных сетях. Работа с
                онлайн-картами.
              </BottomText>
              <PriceBox>
                <Span>от</Span>600 000 ₽
              </PriceBox>
            </div>
          </BottomTextBox>
          <BottomTextBox>
            <div>
              <BottomTitle>Корпоративный сайт</BottomTitle>
              <BottomText>
                Продвижение нескольких товаров или услуг. Настройка контекстной
                и таргетированной рекламы, SEO-продвижение.
              </BottomText>
              <PriceBox>
                <Span>от</Span>700 000 ₽
              </PriceBox>
            </div>
          </BottomTextBox>
          <BottomTextBox>
            <div>
              <BottomTitle>Интернет-магазин</BottomTitle>
              <BottomText>
                Продвижение крупных e-commerce проектов с большим числом товаров
                или услуг. Контекстная и таргетированная реклама,
                SEO-продвижение, работа с торговыми площадками.
              </BottomText>
              <PriceBox>
                <Span>от</Span>700 000 ₽
              </PriceBox>
            </div>
          </BottomTextBox>
        </BottomTextContainer>
      </Container>
    </article>
  );
};

export default Price;
