import {
  Container,
  ContentBox,
  ContentItem,
  ContentList,
  ImgBox,
  Span,
  Text,
  Title,
} from "./styles";

const NeedStrategy = () => {
  return (
    <Container>
      <Title>Когда нужна стратегия</Title>
      <ContentBox>
        <ContentList>
          <ContentItem>Вы выходите на новый рынок</ContentItem>
          <ContentItem>Не знаете, как лучше продвигаться в digital</ContentItem>
          <ContentItem>Достигли «потолка» и хотите расти дальше</ContentItem>
          <Text>
            <Span>В результате:</Span> повышение эффективности<br/> инвестиций в
            маркетинг — ROMI
          </Text>
        </ContentList>
        <ImgBox></ImgBox>
      </ContentBox>
    </Container>
  );
};

export default NeedStrategy;
