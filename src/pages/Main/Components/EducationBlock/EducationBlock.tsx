import Button from "../../../../components/Button/Button";
import {
  EducationItemBox,
  EducationItemText,
  EducationItemTitle,
  EducationSubTitle,
} from "./styles";
interface EducationBlockProps {
  title: string;
  text: string;
  subTitle: string;
}
const EducationBlock = ({ title, text, subTitle }: EducationBlockProps) => {
  const handler = () => {
    alert("Тест");
  };
  return (
    <EducationItemBox>
      <img src="/images/education/grey.svg" alt="blog" />
      <EducationItemTitle>{title}</EducationItemTitle>
      <EducationSubTitle>{subTitle}</EducationSubTitle>
      <EducationItemText>{text}</EducationItemText>
      <Button handler={handler} variant="short" type="normal">
        Подробнее
      </Button>
    </EducationItemBox>
  );
};

export default EducationBlock;
