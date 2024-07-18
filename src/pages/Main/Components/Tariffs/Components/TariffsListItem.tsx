import {
  TariffsItemContainer,
  TariffsItemBlock1,
  TariffsQuantity,
  TariffsItem,
  TariffsEmployees,
  TariffsServicesList,
  TariffsItemBlock2,
  TariffsTitle,
  TariffsPointsList,
} from "./styles";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../../components/Button/Button";
import ApplicationForm from "../../../../../components/ApplicationForm/ApplicationForm";

interface TariffsListItemProps {
  quantity: string;
  name: string;
  employees: string;
  services: string[];
  title: string;
  points: string[];
  variant: string;
  isSpecial?: boolean;
}

const TariffsListItem = ({
  quantity,
  name,
  employees,
  services,
  title,
  points,
  variant,
  isSpecial = false,
}: TariffsListItemProps) => {
  const navigate = useNavigate();
  const handlerNav = () => {
    navigate("/services");
  };

  const [openPopUp, setOpenPopUp] = useState(false);
  const handlerForm = () => {
    setOpenPopUp(!openPopUp);
  };

  
  return (
    <TariffsItemContainer $variant={variant} $isSpecial={isSpecial}>
      <TariffsItemBlock1 $variant={variant} $isSpecial={isSpecial}>
        <TariffsQuantity $variant={variant} $isSpecial={isSpecial}>{quantity}</TariffsQuantity>
        <TariffsItem $variant={variant} $isSpecial={isSpecial}>
          <span>{name}</span> в месяц
        </TariffsItem>
        <TariffsEmployees $variant={variant} $isSpecial={isSpecial}>{employees}</TariffsEmployees>
        <TariffsServicesList $variant={variant} $isSpecial={isSpecial}>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </TariffsServicesList>
        <Button type="bold" variant="short" handler={handlerNav}>узнать подробнее</Button>
      </TariffsItemBlock1>
      <TariffsItemBlock2 $variant={variant} $isSpecial={isSpecial}>
        <TariffsTitle $variant={variant} $isSpecial={isSpecial}>{title}</TariffsTitle>
        <TariffsPointsList $variant={variant} $isSpecial={isSpecial}>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </TariffsPointsList>
        <Button type="bold" variant="short" handler={handlerForm}>заказать</Button>
        {openPopUp && <ApplicationForm onClose={handlerForm} />}
      </TariffsItemBlock2>
    </TariffsItemContainer>
  );
};

export default TariffsListItem;
