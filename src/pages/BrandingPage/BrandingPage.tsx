import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer/Footer";
import FindCost from "../../components/FindCost/FindCost";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import InfoBoxList from "../../components/InfoBoxList/InfoBoxList";
import { brandingData } from "../../constans/servicesPagesData";
import InfoBox from "../../components/InfoBox/InfoBox";
import Synergy from "../../components/Synergy/Synergy";

const BrandingPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[2].title}
        text={serviceData[2].text}
        background={serviceData[2].img}
        url={serviceData[2].url}
        linkText={serviceData[2].title}
      />
      {isOpenServiceOpen && (
        <section>
          <InfoBoxList
            titleWidth="530px"
            textAlight="center"
            data={brandingData[0]}
            position="center"
            current={4}
          />
          <InfoBox data={brandingData[1]} current={6} type="black" />
          <InfoBox
            data={brandingData[2]}
            current={5}
            titleWidth="480px"
            type="marked"
            titleTextWidth="580px"
            width="286px"
          />
          <InfoBox
            data={brandingData[3]}
            current={5}
            type="marked"
            titleWidth="380px"
          />
          <InfoBox
            data={brandingData[4]}
            current={5}
            titleWidth="580px"
            titleTextWidth="480px"
            width="286px"
            type="marked"
          />
          <FindCost img="./images/services/branding/brandingMiddle.jpg" />
          <InfoBox data={brandingData[5]} current={5} type="black" />
          <Synergy
            data={[
              serviceData[0],
              serviceData[14],
              serviceData[5],
              serviceData[8],
              serviceData[7],
              serviceData[4],
            ]}
          />
          <MakeOrder img="./images/services/branding/brandingBottom.jpg">
            Хочу заказать Брендинг!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default BrandingPage;
