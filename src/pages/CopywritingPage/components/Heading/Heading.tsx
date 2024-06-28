import {
  
  Container,
  Text,
  Title,
  TopContainer,
} from "./styles";

const Heading = () => {
  return (
    <Container>
      <TopContainer>
        <Title>Быстро, просто и лаконично.</Title>
        <Text>
          Если вы до сих пор задаетесь вопросами как именно представить свой
          продукт аудитории при помощи простых, но действенных маркетинговых
          уловок - тогда вам точно к нам! Поможем решить задачу вашего бизнеса и
          создать уникальный качественный контент.
        </Text>
      </TopContainer>
    </Container>
  );
};

export default Heading;
