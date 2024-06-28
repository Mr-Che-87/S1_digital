import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer/Footer";
import { Title, TitleBox, TitleText } from "./styles";
import FindCost from "../../components/FindCost/FindCost";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import Synergy from "../../components/Synergy/Synergy";
import InfoBox from "../../components/InfoBox/InfoBox";
import { websitesData } from "../../constans/servicesPagesData";
const WebsitesPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );
  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[4].title}
        text={serviceData[4].text}
        background={serviceData[4].img}
        url={serviceData[4].url}
        linkText={serviceData[4].title}
      />
      {isOpenServiceOpen && (
        <section>
          <TitleBox>
            <Title>Наш подход</Title>
            <TitleText>
              Начинаем с маркетингового проектирования, на котором выявляем ваши
              преимущества и доносим их через контент. Затем впечатляем
              аудиторию дизайном и технической реализацией.
            </TitleText>
          </TitleBox>
          <InfoBox
            data={websitesData[0]}
            current={3}
            type="marked"
            titleWidth="474px"
            titleTextWidth="586px"
          />
          <InfoBox
            data={websitesData[1]}
            current={4}
            width="380px"
            even="true"
            type="marked"
            titleWidth="522px"
            titleTextWidth="538px"
          />
          <InfoBox
            data={websitesData[2]}
            current={3}
            type="marked"
            titleWidth="474px"
            titleTextWidth="586px"
          />
          <InfoBox
            data={websitesData[3]}
            current={3}
            type="marked"
            titleWidth="474px"
            titleTextWidth="586px"
          />
          <InfoBox
            data={websitesData[4]}
            current={3}
            type="color"
            titleWidth="474px"
            titleTextWidth="586px"
          />
          <FindCost img="./images/services/websites/websitesMiddle.jpg" />
          <InfoBox data={websitesData[5]} current={8} type="black" />
          <Synergy
            data={[
              serviceData[0],
              serviceData[15],
              serviceData[3],
              serviceData[2],
              serviceData[5],
              serviceData[11],
            ]}
          />
          <MakeOrder img="./images/services/websites/websitesMiddle.jpg">
            Хочу заказать сайт!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default WebsitesPage;
