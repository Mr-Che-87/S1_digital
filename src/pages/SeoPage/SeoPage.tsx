import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer/Footer";
import FindCost from "../../components/FindCost/FindCost";
import InfoBox from "../../components/InfoBox/InfoBox";
import { seoData } from "../../constans/servicesPagesData";
import Synergy from "../../components/Synergy/Synergy";
import MakeOrder from "../../components/MakeOrder/MakeOrder";

const SeoPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[1].title}
        text={serviceData[1].text}
        background={serviceData[1].img}
        url={serviceData[1].url}
        linkText={serviceData[1].title}
      />
      {isOpenServiceOpen && (
        <section>
          <InfoBox
            type="gradient"
            titleWidth="auto"
            position="center"
            data={seoData[0]}
            current={3}
          />
          <InfoBox
            titleWidth="480px"
            titleTextWidth="580px"
            type="white"
            data={seoData[1]}
            current={3}
          />
          <InfoBox
            data={seoData[2]}
            current={5}
            titleWidth="280px"
            titleTextWidth="780px"
          />
          <InfoBox data={seoData[3]} current={5} noTypeText={{number: '4', width: '640px'}}/>
          <FindCost img="./images/services/seo/seoMiddle.jpg" />
          <InfoBox type="black" data={seoData[4]} current={5} />
          <Synergy
            data={[
              serviceData[9],
              serviceData[7],
              serviceData[10],
              serviceData[11],
              serviceData[8],
              serviceData[4],
            ]}
          />
          <MakeOrder img="./images/services/seo/seoBottom.jpg">
            Хочу заказать SEO!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default SeoPage;
