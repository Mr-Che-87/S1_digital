import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {
  CaseBox,
  CaseImgBox,
  CaseInfoBlock,
  CaseText,
  CaseTextBox,
  CaseTitle,
  CaseTitleShell,
} from "./styles";

interface CaseBlockProps {
  title: string;
  Text: string;
  imgUrl: string;
  link: string;
}
const CaseBlock = ({ title, Text, imgUrl, link }: CaseBlockProps) => {
  return (
    <CaseBox>
      <CaseImgBox src={imgUrl} alt={imgUrl} />
      <CaseInfoBlock>
        <CaseTextBox>
          <CaseTitleShell>
            <CaseTitle>{title}</CaseTitle>
          </CaseTitleShell>
          <CaseText>{Text}</CaseText>
        </CaseTextBox>
        <Link to={`/case/${link}`}>
          <Button variant="short" type="normal">Подробнее</Button>
        </Link>
        
      </CaseInfoBlock>
    </CaseBox>
  );
};

export default CaseBlock;
