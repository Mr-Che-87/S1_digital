import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer/Footer";
import FindCost from "../../components/FindCost/FindCost";
import SubTitleBlock from "./components/SubTitleBlock/SubTitleBlock";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import Synergy from "../../components/Synergy/Synergy";
import InfoBox from "../../components/InfoBox/InfoBox";
import { salesMarketingData } from "../../constans/servicesPagesData";

const SalesMarketingPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[11].title}
        text={serviceData[11].text}
        background={serviceData[11].img}
        url={serviceData[11].url}
        linkText={serviceData[11].title}
      />
      {isOpenServiceOpen && (
        <section>
          <InfoBox
            data={salesMarketingData[0]}
            current={4}
            position="center"
            titleWidth="880px"
            textAlight="center"
            titleTextWidth="360px"
            even="true"
            width="400px"
            type="gradient"
          />
          <SubTitleBlock />
          <InfoBox
            data={salesMarketingData[1]}
            current={4}
            even="true"
            width="400px"
            titleWidth="480px"
            titleTextWidth="580px"
          />
          <InfoBox
            data={salesMarketingData[2]}
            current={3}
            titleWidth="480px"
            titleTextWidth="580px"
          />
          <FindCost img="./images/services/salesMarketing/salesMarketingMiddle.jpg" />
          <InfoBox data={salesMarketingData[3]} current={3} type="black" />
          <Synergy data={[serviceData[15], serviceData[5], serviceData[4]]} />
          <MakeOrder img="./images/services/salesMarketing/salesMarketingBottom.jpg">
            Хочу заказать маркетинг продаж!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default SalesMarketingPage;
