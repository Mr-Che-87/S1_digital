import {
  CasesBox,
  CasesButtonBox,
  CasesItemsBox,
  CasesTitle,
  CasesTitleBox,
} from "./styles";
import { caseData } from "../../constans/caseData";
import CaseBlock from "../CaseBlock/CaseBlock";
import Button from "../Button/Button";
const Cases = () => {
  return (
    <CasesBox>
      <CasesTitleBox>
        <CasesTitle>Наши кейсы</CasesTitle>
      </CasesTitleBox>
      <CasesItemsBox>
        {caseData.map((item, index) => (
          <CaseBlock
            key={index}
            imgUrl={item.imgUrl}
            title={item.title}
            Text={item.text}
            link={item.link}
          />
        ))}
      </CasesItemsBox>
      <CasesButtonBox>
        <Button variant="long" type="color">
          Все кейсы
        </Button>
      </CasesButtonBox>
    </CasesBox>
  );
};

export default Cases;
