import HeaderMain from "../../components/Header/HeaderMain";
import Footer from "../../components/Footer/Footer";

const SmmPage = () => {
  return (
    <main>
      <HeaderMain />
      <h1>Тестовая страница SMM</h1>
      {/* Закомментируйте остальные компоненты для тестирования */}
      {/* <ServicePageAccordion title="Test" text="Test" background="" url="" linkText="Test" /> */}
      <Footer />
    </main>
  );
};

export default SmmPage;



/*
import { useSelector } from "react-redux";
import HeaderMain from "../../components/Header/HeaderMain";
import ServicePageAccordion from "../../components/ServicePageAccordion/ServicePageAccordion";
import { serviceData } from "../../constans/serviceData";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer/Footer";
import { Title, TitleBox, TitleText } from "./styles";

import FindCost from "../../components/FindCost/FindCost";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import InfoBox from "../../components/InfoBox/InfoBox";
import { smmData } from "../../constans/servicesPagesData";
import Synergy from "../../components/Synergy/Synergy";

const SmmPage = () => {
  const isOpenServiceOpen = useSelector(
    (state: RootState) => state.openServiceSlice.open
  );

// лог для отладки:
console.log("isOpenServiceOpen:", isOpenServiceOpen);

  return (
    <main>
      <HeaderMain />
      <ServicePageAccordion
        title={serviceData[7].title}
        text={serviceData[7].text}
        background={serviceData[7].img}
        url={serviceData[7].url}
        linkText={serviceData[7].title}
      />
      {isOpenServiceOpen && (
        <section>
          <TitleBox>
            <Title>Наш подход</Title>
            <TitleText>
              Создаем сильный бренд с помощью взаимодействия с аудиторией
              в социальных сетях. Усиливаем интерес к вашему продукту —
              увеличиваем количество заявок и продаж из социальных сетей.
            </TitleText>
          </TitleBox>
          <InfoBox data={smmData[0]} current={3} />
          <InfoBox
            data={smmData[1]}
            current={3}
            type="marked"
            titleWidth="480px"
            titleTextWidth="580px"
          />
          <InfoBox
            data={smmData[2]}
            current={3}
            type="marked"
            titleWidth="480px"
            titleTextWidth="580px"
          />
          <InfoBox
            data={smmData[3]}
            even="true"
            current={2}
            type="marked"
            width="400px"
            titleWidth="480px"
            titleTextWidth="580px"
          />
          <InfoBox
            data={smmData[4]}
            current={3}
            type="marked"
            titleWidth="480px"
            titleTextWidth="580px"
          />
          <InfoBox
            data={smmData[5]}
            current={6}
            type="black"
            titleWidth="474px"
            titleTextWidth="586px"
          />
          <InfoBox data={smmData[6]} current={3} type="color" />
          <FindCost img="./images/services/smm/smmMiddle.jpg" />
          <InfoBox data={smmData[7]} current={5} type="black" />
          <Synergy
            data={[
              serviceData[9],
              serviceData[10],
              serviceData[1],
              serviceData[11],
              serviceData[4],
              serviceData[8],
            ]}
          />
          <MakeOrder img="./images/services/smm/smmBottom.jpg">
            Хочу заказать SMM!
          </MakeOrder>
          <Footer />
        </section>
      )}
    </main>
  );
};

export default SmmPage;
*/