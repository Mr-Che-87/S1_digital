import MessagesIcon from "../MessagesIcon/MessagesIcon";
import MissionIcon from "../MissionIcon/MissionIcon";
import ProofIcon from "../ProofIcon/ProofIcon";
import ValuesIcon from "../ValuesIcon/ValuesIcon";
import {
  TopContainer,
  BottomTextContainer,
  BottomTextBox,
  BottomTitle,
  BottomText,
  Title,
  Container,
  TitleContainer,
  Text,
  Span,
  TextContainer,
} from "./styles";

const Platform = () => {
  return (
    <Container>
      <TopContainer>
        <Title>Платформа бренда</Title>
        <TextContainer>
          <Text>
            Создаем ключевой посыл бренда, который будем доносить до аудитории
            через айдентику и каналы коммуникации.
          </Text>
          <Text>
            <Span>Результат:</Span> сформировано позиционирование, на основе
            которого будет разработана айдентика и коммуникационная стратегия.
          </Text>
        </TextContainer>
      </TopContainer>
      <BottomTextContainer>
        <BottomTextBox>
          <div>
            <TitleContainer>
              <MissionIcon /> <BottomTitle>Миссия</BottomTitle>
            </TitleContainer>
            <BottomText>Как бренд помогает делать мир лучше?</BottomText>
          </div>
        </BottomTextBox>
        <BottomTextBox>
          <div>
            <TitleContainer>
              <ValuesIcon />
              <BottomTitle>Ценности</BottomTitle>
            </TitleContainer>
            <BottomText>Чем бренд дорожит больше всего?</BottomText>
          </div>
        </BottomTextBox>
        <BottomTextBox>
          <div>
            <TitleContainer>
              <ProofIcon />
              <BottomTitle>Доказательства</BottomTitle>
            </TitleContainer>
            <BottomText>Почему бренду можно верить?</BottomText>
          </div>
        </BottomTextBox>
        <BottomTextBox>
          <div>
            <TitleContainer>
              <MessagesIcon />
              <BottomTitle>Сообщения</BottomTitle>
            </TitleContainer>
            <BottomText>Что доносит бренд во всех коммуникациях?</BottomText>
          </div>
        </BottomTextBox>
      </BottomTextContainer>
    </Container>
  );
};

export default Platform;
