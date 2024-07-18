import { ReactNode, useState } from "react";
import Button from "../Button/Button";
import { MakeOrderBox, Title } from "./styles";
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";

interface MakeOrderProps {
  img: string;
  children: ReactNode;
  width?: string;
}

const MakeOrder = ({ img, children, width }: MakeOrderProps) => {

  const [openPopUp, setOpenPopUp] = useState(false);
  const handlerForm = () => {
    setOpenPopUp(!openPopUp);
  };

  return (
    <MakeOrderBox $img={img}>
      <Title $width={width}>{children}</Title>
      <Button variant="short" type="bold" handler={handlerForm}>
        заказать
      </Button>
      {openPopUp && <ApplicationForm onClose={handlerForm} />}
    </MakeOrderBox>
  );
};

export default MakeOrder;
