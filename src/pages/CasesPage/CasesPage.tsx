import Button from "../../components/Button/Button";
import CaseBlock from "../../components/CaseBlock/CaseBlock";
import {
  CasesBox,
  CasesButtonBox,
  CasesItemsBox,
  CasesTitle,
  CasesTitleBox,
} from "../../components/Cases/styles";
import Footer from "../../components/Footer/Footer";
import HeaderMain from "../../components/Header/HeaderMain";
import { caseData } from "../../constans/caseData";

const CasesPage = () => {
  return (
    <main>
      <HeaderMain />
      <CasesBox>
      <CasesTitleBox>
        <CasesTitle>Наши проекты</CasesTitle>
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
            Смотреть еще
          </Button>
        </CasesButtonBox>
      </CasesBox>
      <Footer />
    </main>
  );
};

export default CasesPage;
