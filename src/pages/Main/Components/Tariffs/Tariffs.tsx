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
          <TariffsListItem variant={item.width}  key={index} name={item.name} title={item.title} text={item.text}/>
        ))}
      </TariffsList>  
          
        
 
    </TariffsBox>
  );
};

export default  Tariffs;
