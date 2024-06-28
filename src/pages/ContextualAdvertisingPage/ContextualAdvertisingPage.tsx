import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer/Footer";
import FindCost from "../../components/FindCost/FindCost";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import Synergy from "../../components/Synergy/Synergy";
import InfoBox from "../../components/InfoBox/InfoBox";
import { contextualAdvertisingData } from "../../constans/servicesPagesData";
import TitleBox from "./Components/TitleBox/TitleBox";

const ContextualAdvertisingPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[9].title}
        text={serviceData[9].text}
        background={serviceData[9].img}
        url={serviceData[9].url}
        linkText={serviceData[9].title}
      />
      {isOpenServiceOpen && (
        <section>
          <InfoBox
            data={contextualAdvertisingData[0]}
            current={3}
            type="gradient"
            position="center"
            titleWidth="980px"
            textAlight="center"
          />
          <TitleBox />
          <InfoBox
            data={contextualAdvertisingData[1]}
            current={3}
            type="marked"
          />
          <InfoBox
            data={contextualAdvertisingData[2]}
            current={3}
            type="marked"
          />
          <InfoBox
            data={contextualAdvertisingData[3]}
            current={4}
            type="marked"
            even="true"
            width="400px"
          />
          <InfoBox
            data={contextualAdvertisingData[4]}
            current={2}
            type="marked"
            titleWidth="480px"
            even="true"
            width="400px"
          />
          <InfoBox
            data={contextualAdvertisingData[5]}
            current={3}
            type="color"
          />
          <InfoBox
            data={contextualAdvertisingData[6]}
            current={3}
            type="gradient"
            titleWidth="783px"
          />
          <FindCost img="./images/services/contextualAdvertising/contextualAdvertisingMiddle.jpg" />
          <InfoBox
            data={contextualAdvertisingData[7]}
            current={5}
            type="black"
          />
          <Synergy
            data={[
              serviceData[10],
              serviceData[1],
              serviceData[7],
              serviceData[11],
              serviceData[4],
              serviceData[8],
            ]}
          />
          <MakeOrder img="./images/services/contextualAdvertising/contextualAdvertisingBottom.jpg">
            Хочу заказать контекстную рекламу!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default ContextualAdvertisingPage;
