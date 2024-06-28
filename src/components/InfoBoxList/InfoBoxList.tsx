import { IntegratedMarketingInterface } from "../../interfaces/integratedMarketingInterface";
import {
  BottomText,
  BottomTextBox,
  BottomTextContainer,
  BottomTitle,
  Container,
  ListItem,
  Text,
  TextContainer,
  Title,
  TopContainer,
} from "./styles";

interface InfoBoxListProps {
  data: IntegratedMarketingInterface;
  current?: number;
  titleWidth?: string;
  position?: string;
  textAlight?: string;
  textTitleWidth?: string;
}

const InfoBoxList = ({
  data,
  current,
  titleWidth,
  position,
  textAlight,
  textTitleWidth,
}: InfoBoxListProps) => {
  return (
    <Container>
      <TopContainer $position={position}>
        <Title $textAlight={textAlight} $titleWidth={titleWidth}>
          {data.title}
        </Title>
        {data.text.length > 0 && (
          <TextContainer $textTitleWidth={textTitleWidth}>
            {data.text.map((item) => (
              <Text>{item}</Text>
            ))}
          </TextContainer>
        )}
      </TopContainer>
      <BottomTextContainer>
        {data.bottomBox.map((item) => (
          <ListItem $current={current}>
            <BottomTextBox>
              <BottomTitle>{item.title}</BottomTitle>
            </BottomTextBox>
            <BottomText>{item.text}</BottomText>
          </ListItem>
        ))}
      </BottomTextContainer>
    </Container>
  );
};

export default InfoBoxList;
