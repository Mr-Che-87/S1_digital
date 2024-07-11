import {
  TariffsItemContainer,
  TariffsItemBlock1,
  TariffsItemBlock2,
  TariffsItem,
  TariffsEmployees,
  TariffsServicesList,
  TariffsTitle,
  TariffsPointsList,
  TariffsButton
} from "./styles";

interface TariffsListItemProps {
  name: string;
  employees: string;
  services: string[];
  detailsButton: string;
  title: string;
  points: string[];
  orderButton: string;
  variant: string;
}

const TariffsListItem = ({
  name,
  employees,
  services,
  detailsButton,
  title,
  points,
  orderButton,
  variant
}: TariffsListItemProps) => {
  return (
    <TariffsItemContainer $variant={variant}>
      
      <TariffsItemBlock1>
        <TariffsItem>{name}</TariffsItem>
        <TariffsEmployees>{employees}</TariffsEmployees>
        <TariffsServicesList>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
        </TariffsServicesList>
        <TariffsButton>{detailsButton}</TariffsButton>
        </TariffsItemBlock1>
      
      <TariffsItemBlock2>
        <TariffsTitle>{title}</TariffsTitle>
        <TariffsPointsList>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </TariffsPointsList>
        <TariffsButton>{orderButton}</TariffsButton>
      </TariffsItemBlock2>
    
    </TariffsItemContainer>
  );
};

export default TariffsListItem;

