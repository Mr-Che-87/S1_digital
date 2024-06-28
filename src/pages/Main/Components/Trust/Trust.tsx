import { clientsData } from "../../../../constans/clientsData";
import Client from "./Components/Client/Client";
import {
  ClientsBox,
  TrustBox,
  TrustText,
  TrustTextBox,
  TrustTitle,
  TrustTitleBox,
} from "./styles";

const Trust = () => {
  return (
    <TrustBox>
      <TrustTitleBox>
        <TrustTitle>Нам доверяют</TrustTitle>
      </TrustTitleBox>
      <TrustTextBox>
        <TrustText>
          Мы профессионально закрываем задачи коммуникации, позиционирования и
          управления репутацией
        </TrustText>
      </TrustTextBox>

      <ClientsBox>
        {clientsData.map((item, index) => (
          <Client key={index} src={item.src} alt={item.alt} />
        ))}
      </ClientsBox>
    </TrustBox>
  );
};

export default Trust;
