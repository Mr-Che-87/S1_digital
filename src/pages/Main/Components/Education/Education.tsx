import {
  EducationBox,
  EducationItemsBox,
  EducationTitle,
  EducationTitleBox,
} from "./styles";
import { educationData } from "../../../../constans/educationData";
import EducationBlock from "../EducationBlock/EducationBlock";
const Education = () => {
  return (
    <EducationBox>
      <EducationTitleBox>
        <EducationTitle>Обучение</EducationTitle>
      </EducationTitleBox>
      <EducationItemsBox>
        {educationData.map((item, index) => (
          <EducationBlock
            key={index}
            title={item.title}
            text={item.text}
            subTitle={item.subTitle}
          />
        ))}
      </EducationItemsBox>
    </EducationBox>
  );
};

export default Education;
