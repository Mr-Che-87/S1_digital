import { ReactNode } from "react";
import Button from "../Button/Button";
import { MakeOrderBox, Title } from "./styles";

interface MakeOrderProps {
  img: string;
  children: ReactNode;
  width?: string;
}

const MakeOrder = ({ img, children, width }: MakeOrderProps) => {
  return (
    <MakeOrderBox $img={img}>
      <Title $width={width}>{children}</Title>
      <Button variant="short" type="bold">
        заказать
      </Button>
    </MakeOrderBox>
  );
};

export default MakeOrder;
