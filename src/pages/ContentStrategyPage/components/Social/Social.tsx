import {
  BottomTextContainer,
  BottomTextBox,
  BottomTitle,
  BottomText,
  Container,
  BottomItem,
  BottomContainer,
} from "./styles";
const Social = () => {
  return (
    <Container>
      <BottomTextContainer>
        <BottomTextBox>
          <BottomContainer>
            <BottomTitle>Пример выбора< br/> социальных сетей</BottomTitle>
            <BottomItem>
              <BottomText>Facebook</BottomText>
            </BottomItem>
            <BottomItem>
              <BottomText>Вконтакте</BottomText>
            </BottomItem>
            <BottomItem>
              <BottomText>Instagram</BottomText>
            </BottomItem>
          </BottomContainer>
        </BottomTextBox>
        <BottomTextBox>
          <BottomContainer>
            <BottomTitle>Бизнес-цели присутствия</BottomTitle>
            <BottomItem>
              <BottomText>Формирование пула лояльной аудитории</BottomText>
              <BottomText>Поддержка отношений со старыми клиентами</BottomText>
            </BottomItem>
            <BottomItem>
              <BottomText>Увеличение качественного трафика на сайт</BottomText>
              <BottomText>Повышение уровня вовлеченности в соцсетях</BottomText>
            </BottomItem>
            <BottomItem>
              <BottomText>
                Повышение продаж услуг и исследовательских продуктов
              </BottomText>
            </BottomItem>
          </BottomContainer>
        </BottomTextBox>
        <BottomTextBox>
          <BottomContainer>
            <BottomTitle>Целевая аудитория</BottomTitle>
            <BottomItem>
              <BottomText>
                Находим СМИ и блогеров, которых любит ваша аудитория. Определяем
                количество зрителей и читателей, узнаём эффективность рекламы.
                Рассчитываем стоимость показа и заявки в результате публикации.
              </BottomText>
            </BottomItem>
            <BottomItem>
              <BottomText>
                оп-менеджеры, директора по развитию, финансовые директора
              </BottomText>
            </BottomItem>
            <BottomItem>
              <BottomText></BottomText>
            </BottomItem>
          </BottomContainer>
        </BottomTextBox>
      </BottomTextContainer>
    </Container>
  );
};

export default Social;
