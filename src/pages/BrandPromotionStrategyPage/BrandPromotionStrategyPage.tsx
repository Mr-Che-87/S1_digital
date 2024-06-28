import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import InfoBox from "../../components/InfoBox/InfoBox";
import { brandPromotionStrategyData } from "../../constans/servicesPagesData";
import FindCost from "../../components/FindCost/FindCost";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import Platform from "./components/Platform/Platform";

const BrandPromotionStrategyPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[14].title}
        text={serviceData[14].text}
        background={serviceData[14].img}
        url={serviceData[14].url}
        linkText={serviceData[14].title}
      />
      {isOpenServiceOpen && (
        <section>
          <InfoBox
            data={brandPromotionStrategyData[0]}
            current={4}
            titleWidth="952px"
            position="center"
            type="gradient"
            even="true"
            width="400px"
          />
          <InfoBox data={brandPromotionStrategyData[1]} current={3} />
          <InfoBox data={brandPromotionStrategyData[2]} current={3} />
          <Platform />
          <InfoBox data={brandPromotionStrategyData[3]} current={4} />
          <FindCost img="./images/services/brandPromotionStrategy/brandPromotionStrategyMiddle.jpg" />
          <InfoBox
            data={brandPromotionStrategyData[4]}
            current={4}
            titleWidth="580px"
            titleTextWidth="480px"
            even="true"
            width="400px"
          />
          <InfoBox
            data={brandPromotionStrategyData[5]}
            current={2}
            width="400px"
            even="true"
          />
          <InfoBox
            data={brandPromotionStrategyData[6]}
            current={2}
            width="400px"
            even="true"
          />
          <InfoBox
            data={brandPromotionStrategyData[7]}
            type="color"
            titleWidth="480px"
            titleTextWidth="580px"
            current={2}
            width="400px"
            even="true"
          />
          <MakeOrder img="./images/services/brandPromotionStrategy/brandPromotionStrategyBottom.jpg">
            Хочу заказать Стратегию продвижения брендa!
          </MakeOrder>
        </section>
      )}
    </main>
  );
};

export default BrandPromotionStrategyPage;
