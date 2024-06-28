import Button from "../../components/Button/Button";
import CaseBlock from "../../components/CaseBlock/CaseBlock";
import {
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
      <CasesTitleBox>
        <CasesTitle>Наши кейсы</CasesTitle>
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
      </CasesTitleBox>
      <Footer />
    </main>
  );
};

export default CasesPage;
