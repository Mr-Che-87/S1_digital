import { useState } from "react";
import Button from "../Button/Button";
import { FindCostBox, Title } from "./styles";
import ApplicationForm from "../ApplicationForm/ApplicationForm";
interface FindCostProps {
  img: string;
}

const FindCost = ({ img }: FindCostProps) => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const handler = () => {
    openPopUp === false ? setOpenPopUp(true) : setOpenPopUp(false);
    console.log(openPopUp);
  };
  return (
    <FindCostBox $img={img}>
      {openPopUp === true && <ApplicationForm />}
      <Title>Узнать стоимость</Title>
      <Button handler={handler} variant="short" type="bold">
        Стоимость
      </Button>
    </FindCostBox>
  );
};

export default FindCost;
