import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer/Footer";
import NeedStrategy from "./components/NeedStrategy/NeedStrategy";
import { Title } from "./styles";
import FindCost from "../../components/FindCost/FindCost";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import InfoBox from "../../components/InfoBox/InfoBox";
import { marketingStrategyData } from "../../constans/servicesPagesData";
import Synergy from "../../components/Synergy/Synergy";

const MarketingStrategyPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[3].title}
        text={serviceData[3].text}
        background={serviceData[3].img}
        url={serviceData[3].url}
        linkText={serviceData[3].title}
      />
      {isOpenServiceOpen && (
        <section>
          <NeedStrategy />
          <Title>Как мы это делаем</Title>
          <InfoBox
            data={marketingStrategyData[0]}
            titleWidth="410px"
            titleTextWidth="650px"
            current={3}
          />
          <InfoBox
            data={marketingStrategyData[1]}
            titleWidth="590px"
            titleTextWidth="470px"
            current={3}
          />
          <InfoBox
            data={marketingStrategyData[2]}
            titleWidth="580px"
            titleTextWidth="480px"
            current={5}
          />
          <InfoBox
            data={marketingStrategyData[3]}
            current={3}
            titleWidth="580px"
          />
          <FindCost img="./images/services/marketingStrategy/marketingStrategyMiddle.jpg" />
          <InfoBox
            data={marketingStrategyData[4]}
            type="black"
            current={5}
            noTypeText={{ number: "5", width: "653px" }}
          />
          <Synergy data={[serviceData[0], serviceData[14], serviceData[6]]} />
          <MakeOrder img="./images/services/marketingStrategy/marketingStrategyBottom.jpg">
            Хочу заказать маркетинговую стратегию!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default MarketingStrategyPage;
