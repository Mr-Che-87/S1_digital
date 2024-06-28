import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer/Footer";
import Influence from "./components/Influence/Influence";
import TitleBox from "./components/TitleBox/TitleBox";
import FindCost from "../../components/FindCost/FindCost";
import Synergy from "../../components/Synergy/Synergy";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import InfoBox from "../../components/InfoBox/InfoBox";
import { contentMarketingData } from "../../constans/servicesPagesData";
import InfoBoxList from "../../components/InfoBoxList/InfoBoxList";

const ContentMarketingPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[5].title}
        text={serviceData[5].text}
        background={serviceData[5].img}
        url={serviceData[5].url}
        linkText={serviceData[5].title}
      />
      {isOpenServiceOpen && (
        <section>
          <Influence />
          <TitleBox />
          <InfoBox
            data={contentMarketingData[0]}
            current={3}
            titleWidth="410px"
            titleTextWidth="650px"
          />
          <InfoBox
            data={contentMarketingData[1]}
            current={3}
            titleWidth="480px"
            titleTextWidth="580px"
          />
          <InfoBox
            data={contentMarketingData[2]}
            current={3}
            titleWidth="480px"
            titleTextWidth="580px"
          />
          <InfoBox
            data={contentMarketingData[3]}
            current={6}
            type="black"
            titleWidth="578px"
          />
          <InfoBox
            data={contentMarketingData[4]}
            current={4}
            even="true"
            type="gradient"
            titleWidth="980px"
            titleTextWidth="579px"
            width="400px"
          />
          <InfoBox data={contentMarketingData[5]} current={3} type="black" />
          <FindCost img="./images/services/contentMarketing/contentMarketingMiddle.jpg" />
          <InfoBoxList
            data={contentMarketingData[6]}
            current={4}
            titleWidth="680px"
          />
          <InfoBox
            data={contentMarketingData[7]}
            current={3}
            type="marked"
            titleWidth="474px"
          />
          <InfoBox
            data={contentMarketingData[8]}
            current={3}
            type="marked"
            titleWidth="646px"
          />
          <InfoBox
            data={contentMarketingData[9]}
            current={3}
            type="marked"
            titleWidth="442px"
          />
          <InfoBox
            data={contentMarketingData[10]}
            current={3}
            type="marked"
            titleWidth="365px"
            width="286px"
          />
          <InfoBox data={contentMarketingData[11]} current={5} type="black" />

          <Synergy
            data={[
              serviceData[0],
              serviceData[15],
              serviceData[6],
              serviceData[2],
              serviceData[4],
              serviceData[11],
            ]}
          />
          <MakeOrder img="./images/services/contentMarketing/contentMarketingBottom.jpg">
            Хочу заказать контент-маркетинг!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default ContentMarketingPage;
