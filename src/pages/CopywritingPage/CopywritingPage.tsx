import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer/Footer";
import Heading from "./components/Heading/Heading";
import Offer from "./components/Offer/Offer";
import FindCost from "../../components/FindCost/FindCost";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import Synergy from "../../components/Synergy/Synergy";
import InfoBox from "../../components/InfoBox/InfoBox";
import { copywritingData } from "../../constans/servicesPagesData";
import InfoBoxList from "../../components/InfoBoxList/InfoBoxList";

const CopywritingPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[12].title}
        text={serviceData[12].text}
        background={serviceData[12].img}
        url={serviceData[12].url}
        linkText={serviceData[12].title}
      />
      {isOpenServiceOpen && (
        <section>
          <Heading />
          <Offer />
          <InfoBox data={copywritingData[0]} current={3} type="black" />
          <InfoBoxList
            data={copywritingData[1]}
            current={4}
            titleWidth="580px"
          />
          <InfoBox
            data={copywritingData[2]}
            current={3}
            type="marked"
            titleWidth="480px"
          />
          <InfoBox
            data={copywritingData[3]}
            current={3}
            type="marked"
            titleWidth="660px"
          />
          <InfoBox
            data={copywritingData[4]}
            current={3}
            type="marked"
            titleWidth="480px"
          />
          <InfoBox
            data={copywritingData[5]}
            current={3}
            type="marked"
            titleWidth="480px"
          />
          <FindCost img="./images/services/copywriting/copywritingMiddle.jpg" />
          <InfoBox data={copywritingData[6]} current={6} type="black" />
          <Synergy
            data={[
              serviceData[0],
              serviceData[14],
              serviceData[6],
              serviceData[4],
              serviceData[7],
              serviceData[8],
            ]}
          />
          <MakeOrder img="./images/services/copywriting/copywritingBottom.jpg">
            Хочу заказать услугу копирайтинга!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default CopywritingPage;
