import { ServiceData } from "../../interfaces/serviceData";
import ServiceBlock from "../ServiceBlock/ServiceBlock";
import {
  Container,
  ServicesBox,
  ServicesShell,
  SynergyServicesBox,
  Title,
} from "./styles";
interface SynergyServices {
  data: Array<ServiceData>;
  variant?: string;
}
const Synergy = ({ data, variant }: SynergyServices) => {
  return (
    <SynergyServicesBox>
      <Title>Синергия с услугами</Title>
      <Container>
        <ServicesBox>
          {data.map((item) => (
            <ServicesShell>
              <ServiceBlock
                text={item.text}
                url={item.url}
                title={item.altTitle ? item.altTitle : item.title}
              />
            </ServicesShell>
          ))}
        </ServicesBox>
      </Container>
    </SynergyServicesBox>
  );
};

export default Synergy;
