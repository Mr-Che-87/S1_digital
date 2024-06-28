import {
  Container,
  ContentBox,
  ContentItem,
  ContentList,
  TextBox,
  Text,
  Title,
} from "./styles";

const NeedStrategy = () => {
  return (
    <Container>
      <Title>Когда нужна стратегия</Title>
      <ContentBox>
        <TextBox>
          <Text>
            Мы понимаем, как бренду лучше взаимодействовать с аудиторией.
            Определяем стоимость и измеримые показатели целей, которых хотим
            достигнуть. Подбираем площадки, популярные среди аудитории, и методы
            продвижения.
          </Text>
        </TextBox>
        <ContentList>
          <ContentItem>Бренд выходит на рынок.</ContentItem>
          <ContentItem>Новый продукт, который принципиально отличается от существующих на рынке.</ContentItem>
          <ContentItem>Высокая конкуренция в нише</ContentItem>
        </ContentList>
      </ContentBox>
    </Container>
  );
};

export default NeedStrategy;
