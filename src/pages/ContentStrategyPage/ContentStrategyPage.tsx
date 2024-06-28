import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer/Footer";
import NeedStrategy from "./components/NeedStrategy/NeedStrategy";
import Social from "./components/Social/Social";
import FindCost from "../../components/FindCost/FindCost";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import InfoBox from "../../components/InfoBox/InfoBox";
import { contentStrategyData } from "../../constans/servicesPagesData";
import InfoBoxList from "../../components/InfoBoxList/InfoBoxList";
import Synergy from "../../components/Synergy/Synergy";

const ContentStrategyPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[6].title}
        text={serviceData[6].text}
        background={serviceData[6].img}
        url={serviceData[6].url}
        linkText={serviceData[6].title}
      />
      {isOpenServiceOpen && (
        <section>
          <NeedStrategy />
          <InfoBox
            data={contentStrategyData[0]}
            type="black"
            even="true"
            current={4}
            width="400px"
          />
          <InfoBoxList
            data={contentStrategyData[1]}
            current={4}
            titleWidth="680px"
          />
          <InfoBox
            data={contentStrategyData[2]}
            type="marked"
            current={3}
            width="286px"
            titleWidth="480px"
            titleTextWidth="580px"
          />
          <InfoBox
            data={contentStrategyData[3]}
            type="marked"
            current={2}
            width="400px"
            even="true"
            titleWidth="500px"
            titleTextWidth="560px"
          />
          <Social />
          <InfoBox
            data={contentStrategyData[4]}
            type="marked"
            current={3}
            width="286px"
          />
          <InfoBox
            data={contentStrategyData[5]}
            type="marked"
            current={3}
            titleWidth="610px"
            titleTextWidth="450px"
            width="286px"
          />
          <InfoBox
            data={contentStrategyData[6]}
            type="marked"
            current={3}
            titleWidth="490px"
            titleTextWidth="570px"
            width="286px"
          />
          <InfoBox
            data={contentStrategyData[7]}
            type="color"
            current={4}
            titleWidth="474px"
            even="true"
            width="400px"
          />
          <FindCost img="./images/services/contentStrategy/contentStrategyMiddle.jpg" />
          <InfoBox
            data={contentStrategyData[8]}
            type="black"
            current={5}
            width="286px"
            noTypeText={{ number: "5", width: "623px" }}
          />
          <Synergy data={[serviceData[3], serviceData[14]]} />
          <MakeOrder img="./images/services/contentStrategy/contentStrategyBottom.jpg">
            Хочу заказать контент-стратегию!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default ContentStrategyPage;
