import ServiceBlock from "../ServiceBlock/ServiceBlock";
import {
  ServicesBox,
  ServicesItemsBox,
  ServicesTitle,
  ServicesTitleBox,
} from "./styles";
import { serviceData } from "../../constans/serviceData";
const Services = () => {
  return (
    <ServicesBox>
      <ServicesTitleBox>
        <ServicesTitle>Услуги</ServicesTitle>
      </ServicesTitleBox>
      <ServicesItemsBox>
        {serviceData.map(
          (item, index) =>
            index < 14 && (
              <ServiceBlock
                url={item.url}
                key={index}
                title={item.title}
                text={item.text}
              />
            )
        )}
      </ServicesItemsBox>
    </ServicesBox>
  );
};

export default Services;
