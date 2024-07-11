import { TariffsDataText } from "../../../../constans/textData";
import TariffsListItem from "./Components/TariffsListItem";


import {
  TariffsBox,
  TariffsTitleBox,
  TariffsTitle,
  TariffsList
} from "./styles";

const  Tariffs = () => {

  return (
    <TariffsBox>
      <TariffsTitleBox>
        <TariffsTitle>
          Берем все на себя
          </TariffsTitle>
      </TariffsTitleBox>

      <TariffsList>
        {TariffsDataText.map((item, index) => (
          <TariffsListItem
          key={index}
          variant={item.width}
          quantity={item.quantity}
          name={item.name}
          employees={item.employees}
          services={item.services}
          title={item.title}
          points={item.points}
          isSpecial={item.isSpecial} 
        />
        ))}
      </TariffsList>  
          
        
 
    </TariffsBox>
  );
};

export default  Tariffs;
