import { useParams } from "react-router-dom";
import { caseData } from "../../constans/caseData";
import Footer from "../../components/Footer/Footer";
import {PageImg, StyledCasePage} from './styles'
import HeaderMain from "../../components/Header/HeaderMain";
const CasePage = () => {
  const params = useParams();
  const caseItem = caseData.find(
    (item) => item.link === (params.case)
  );
  return (
    <StyledCasePage>
        <HeaderMain/>
      {caseItem?.pageData.map((item, index)=> (
        <PageImg key={index} src={item} alt={caseItem.title} />
      ))}
      <Footer/>
    </StyledCasePage>
  );
};

export default CasePage;
