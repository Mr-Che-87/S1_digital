import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import InfoBox from "../../components/InfoBox/InfoBox";
import { comprehensivePromotion } from "../../constans/servicesPagesData";
import FindCost from "../../components/FindCost/FindCost";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import Price from "./components/Price/Price";

const ComprehensivepromotionPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[15].title}
        text={serviceData[15].text}
        background={serviceData[15].img}
        url={serviceData[15].url}
        linkText={serviceData[15].title}
      />
      {isOpenServiceOpen && (
        <main>
          <InfoBox
            data={comprehensivePromotion[0]}
            type="gradient"
            position="center"
            titleWidth="580px"
            current={3}
          />
          <InfoBox
            data={comprehensivePromotion[1]}
            even="true"
            current={4}
            width="400px"
            titleWidth="480px"
            titleTextWidth="580px"
          />
          <InfoBox
            data={comprehensivePromotion[2]}
            titleWidth="480px"
            titleTextWidth="580px"
            current={5}
          />
          <InfoBox data={comprehensivePromotion[3]} type="color" current={3} />
          <FindCost img="./images/services/comprehensivePromotion/comprehensivePromotionMiddle.jpg" />
          <Price />
          <InfoBox data={comprehensivePromotion[4]} type="black" current={5} />
          <MakeOrder
            width="794px"
            img="./images/services/comprehensivePromotion/comprehensivePromotionBottom.jpg"
          >
            Хочу заказать
            <br /> комплексное продвижение!
          </MakeOrder>
        </main>
      )}
    </main>
  );
};

export default ComprehensivepromotionPage;
