import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer/Footer";
import { Title } from "./styles";
import FindCost from "../../components/FindCost/FindCost";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import Synergy from "../../components/Synergy/Synergy";
import InfoBox from "../../components/InfoBox/InfoBox";
import { targetedAdvertisingData } from "../../constans/servicesPagesData";

const TargetedAdvertisingPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[10].title}
        text={serviceData[10].text}
        background={serviceData[10].img}
        url={serviceData[10].url}
        linkText={serviceData[10].title}
      />
      {isOpenServiceOpen && (
        <section>
          <InfoBox
            data={targetedAdvertisingData[0]}
            current={3}
            type="gradient"
            position="center"
            titleWidth="980px"
            textAlight="center"
          />
          <Title>Наш подход</Title>
          <InfoBox
            data={targetedAdvertisingData[1]}
            current={3}
            type="marked"
            titleWidth="480px"
            titleTextWidth="580px"
          />
          <InfoBox
            data={targetedAdvertisingData[2]}
            type="marked"
            current={4}
            even="true"
            width="400px"
          />
          <InfoBox
            data={targetedAdvertisingData[3]}
            type="marked"
            titleWidth="480px"
          />
          <InfoBox
            data={targetedAdvertisingData[4]}
            type="marked"
            titleWidth="480px"
            current={2}
            even="true"
            width="400px"
          />
          <InfoBox data={targetedAdvertisingData[5]} type="color" current={3} />
          <FindCost img="./images/services/targetedAdvertising/targetedAdvertisingMiddle.jpg" />
          <InfoBox data={targetedAdvertisingData[6]} type="black" current={5} />
          <Synergy
            data={[
              serviceData[7],
              serviceData[1],
              serviceData[11],
              serviceData[9],
              serviceData[4],
              serviceData[8],
            ]}
          />
          <MakeOrder img="./images/services/targetedAdvertising/targetedAdvertisingBottom.jpg">
            Хочу заказать таргетинг!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default TargetedAdvertisingPage;
