import InternshipForm from "./Components/InternshipForm/InternshipForm";
import Requirements from "./Components/Requirements/Requirements";
import InternshipItemBlock from "./Components/InternshipItemBlock/InternshipItemBlock";
import Results from "./Components/Results/Results";
import WhatGives from "./Components/WhatGives/WhatGives";
import WorkTime from "./Components/WorkTime/WorkTime";
import {
  InternshipBox,
  InternshipList,
  InternshipText,
  InternshipTitle,
  InternshipTitleBox,
} from "./styles";
const Internship = () => {
  return (
    <InternshipBox>
      <InternshipTitleBox>
        <InternshipTitle>Стажировка</InternshipTitle>
      </InternshipTitleBox>
      <InternshipText>
        Мы помогаем начинающим специалистам приобрести опыт
        <br /> на реальных проектах под руководством опытных наставников
      </InternshipText>
      <InternshipList>
        <InternshipItemBlock text="Преимущества:">
          <WorkTime />
        </InternshipItemBlock>
        <InternshipItemBlock text="Что дает стажировка:">
          <WhatGives />
        </InternshipItemBlock>
        <InternshipItemBlock text="По итогам стажировки вы получите:">
          <Results />
        </InternshipItemBlock>
        <InternshipForm />
        <InternshipItemBlock text="Требования к кандидатам:">
          <Requirements />
        </InternshipItemBlock>
      </InternshipList>
    </InternshipBox>
  );
};

export default Internship;
