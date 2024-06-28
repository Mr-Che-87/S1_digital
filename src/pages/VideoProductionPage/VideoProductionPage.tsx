import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer/Footer";
import FindCost from "../../components/FindCost/FindCost";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import InfoBox from "../../components/InfoBox/InfoBox";
import { videoProductionData } from "../../constans/servicesPagesData";
import Synergy from "../../components/Synergy/Synergy";
const VideoProductionPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[8].title}
        text={serviceData[8].text}
        background={serviceData[8].img}
        url={serviceData[8].url}
        linkText={serviceData[8].title}
      />
      {isOpenServiceOpen && (
        <section>
          <InfoBox
            data={videoProductionData[0]}
            current={6}
            type="gradient"
            position="center"
          />
          <InfoBox
            data={videoProductionData[1]}
            current={4}
            even="true"
            width="400px"
            titleWidth="480px"
            titleTextWidth="580px"
          />
          <InfoBox data={videoProductionData[2]} current={3} />
          <InfoBox data={videoProductionData[3]} current={3} />
          <InfoBox
            data={videoProductionData[4]}
            current={4}
            type="gradient"
            titleWidth="480px"
            titleTextWidth="580px"
            even="true"
            width="400px"
          />
          <FindCost img="./images/services/videoProduction/videoProductionMiddle.jpg" />
          <InfoBox data={videoProductionData[5]} current={6} type="black" />
          <Synergy data={[serviceData[15], serviceData[5], serviceData[4]]} />
          <MakeOrder img="./images/services/videoProduction/videoProductionBottom.jpg">
            Хочу заказать видеопродакшн!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default VideoProductionPage;
