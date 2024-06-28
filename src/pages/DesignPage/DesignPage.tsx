import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer/Footer";
import FindCost from "../../components/FindCost/FindCost";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import InfoBox from "../../components/InfoBox/InfoBox";
import { designData } from "../../constans/servicesPagesData";

const DesignPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[13].title}
        text={serviceData[13].text}
        background={serviceData[13].img}
        url={serviceData[13].url}
        linkText={serviceData[13].title}
      />
      {isOpenServiceOpen && (
        <section>
          <InfoBox
            data={designData[0]}
            current={4}
            type="gradient"
            even="true"
            position="center"
            titleTextWidth="762px"
            width="400px"
          />
          <InfoBox
            data={designData[1]}
            current={4}
            type="marked"
            titleWidth="600px"
            titleTextWidth="460px"
            even="true"
            width="400px"
          />
          <InfoBox
            data={designData[2]}
            current={4}
            type="marked"
            titleWidth="380px"
            titleTextWidth="680px"
            even="true"
            width="400px"
          />
          <InfoBox
            data={designData[3]}
            current={3}
            type="marked"
            titleWidth="540px"
            titleTextWidth="520px"
          />
          <InfoBox data={designData[4]} current={3} type="marked" />
          <InfoBox
            data={designData[5]}
            current={3}
            type="marked"
            titleWidth="440px"
            titleTextWidth="620px"
          />
          <FindCost img="./images/services/design/designMiddle.jpg" />
          <InfoBox data={designData[6]} current={6} type="black" />
          <MakeOrder img="./images/services/design/designBottom.jpg">
            Хочу заказать дизайн!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default DesignPage;
