import { IntegratedMarketingInterface } from "../../interfaces/integratedMarketingInterface";
import { NoTypeText } from "../../interfaces/serviceData";
import {
  TopContainer,
  Text,
  BottomTextContainer,
  TextContainer,
  BottomTextBox,
  BottomTitle,
  BottomText,
  Title,
  Container,
} from "./styles";

interface InfoBoxProps {
  data: IntegratedMarketingInterface;
  type?: string;
  current?: number;
  titleWidth?: string;
  width?: string;
  even?: string;
  position?: string;
  textAlight?: string;
  titleTextWidth?: string;
  noTypeText?: NoTypeText;
}

const InfoBox = ({
  data,
  type,
  current,
  titleWidth,
  titleTextWidth,
  width,
  even,
  position,
  textAlight,
  noTypeText,
}: InfoBoxProps) => {
  return (
    <Container $type={type}>
      {data.title && (
        <TopContainer $position={position} $type={type}>
          <Title
            dangerouslySetInnerHTML={{ __html: data.title }}
            $textAlight={textAlight}
            $titleWidth={titleWidth}
            $type={type}
          ></Title>
          {data.text.length > 0 && (
            <TextContainer $titleTextWidth={titleTextWidth}>
              {data.text.map((item) => (
                <Text
                  dangerouslySetInnerHTML={{ __html: item }}
                  $type={type}
                ></Text>
              ))}
            </TextContainer>
          )}
        </TopContainer>
      )}

      <BottomTextContainer $even={even} $type={type}>
        {data.bottomBox.map((item) => (
          <BottomTextBox
            $width={width}
            $even={even}
            $type={type}
            $current={current}
            $noTypeText={noTypeText}
          >
            <div>
              <BottomTitle
                $type={type}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></BottomTitle>
              <BottomText
                $type={type}
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></BottomText>
            </div>
          </BottomTextBox>
        ))}
      </BottomTextContainer>
    </Container>
  );
};

export default InfoBox;
