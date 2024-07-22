import { useState } from "react";
import {
  CasesBox,
  CasesButtonBox,
  CasesItemsBox,
  CasesTitle,
  CasesTitleBox,
} from "./styles";
import HeaderMain from "../../components/Header/HeaderMain";
import CaseBlock from "../../components/CaseBlock/CaseBlock";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

import { caseData } from "../../constans/caseData";

const CasesPage = () => {
   // Состояние для управления количеством отображаемых элементов
   const [visibleCount, setVisibleCount] = useState(8);  //8 проектов максимум на главной странице

   // Функция для загрузки ещё элементов
   const loadMore = () => {
     setVisibleCount((prevCount) => prevCount + 8);
   };
   //Функция для их скрытия:
   const showLess = () => {
    setVisibleCount(8);
  };

  const isAllVisible = visibleCount >= caseData.length;

  return (
    <main>
      <HeaderMain />
      <CasesBox>
      <CasesTitleBox>
        <CasesTitle>Наши проекты</CasesTitle>
        </CasesTitleBox>
        <CasesItemsBox>
          {caseData.slice(0, visibleCount).map((item, index) => (
            <CaseBlock
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              Text={item.text}
              link={item.link}
            />
          ))}
        </CasesItemsBox>
        <CasesButtonBox>
          {!isAllVisible && (
            <Button variant="long" type="color" handler={loadMore}>
              Смотреть еще
            </Button>
          )}
          {visibleCount > 8 && (
            <Button variant="long" type="color" handler={showLess}>
              Скрыть часть проектов
            </Button>
          )}
        </CasesButtonBox>
      </CasesBox>
      <Footer />
    </main>
  );
};

export default CasesPage;
