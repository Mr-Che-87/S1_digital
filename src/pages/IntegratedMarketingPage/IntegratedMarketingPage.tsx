import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import InfoBox from "../../components/InfoBox/InfoBox";
import { integratedMarketingData } from "../../constans/servicesPagesData";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import FindCost from "../../components/FindCost/FindCost";
import InfoBoxList from "../../components/InfoBoxList/InfoBoxList";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import Footer from "../../components/Footer/Footer";
const IntegratedMarketing = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );

  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[0].title}
        text={serviceData[0].text}
        background={serviceData[0].img}
        url={serviceData[0].url}
        linkText={serviceData[0].title}
      />
      {isOpenServiceOpen && (
        <section>
          <InfoBoxList
            data={integratedMarketingData[0]}
            current={4}
            position="center"
          />
          <InfoBox data={integratedMarketingData[1]} current={3} />
          <InfoBox data={integratedMarketingData[2]} current={3} />
          <InfoBox type="black" data={integratedMarketingData[3]} current={3} />
          <InfoBox data={integratedMarketingData[4]} current={3} />
          <InfoBox data={integratedMarketingData[5]} current={3} />
          <InfoBox data={integratedMarketingData[6]} current={3} />
          <InfoBox
            type="white"
            even="true"
            width="380px"
            data={integratedMarketingData[7]}
            current={2}
          />
          <FindCost img="./images/services/integratedMarketing/integratedMarketingMiddle.jpg" />
          <InfoBox type="black" data={integratedMarketingData[8]} current={3} />
          <InfoBox type="white" data={integratedMarketingData[9]} current={3} />
          <InfoBox
            titleWidth="801px"
            type="black"
            data={integratedMarketingData[10]}
            current={3}
          />
          <InfoBox
            even="true"
            width="380px"
            type="white"
            data={integratedMarketingData[11]}
            current={2}
          />
          <InfoBoxList current={4} data={integratedMarketingData[12]} />
          <InfoBox
            width="380px"
            even="true"
            type="black"
            data={integratedMarketingData[13]}
            current={8}
          />
          <MakeOrder img="./images/services/integratedMarketing/integratedMarketingMiddle.jpg">
            Хочу заказать Комплексный маркетинг!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default IntegratedMarketing;