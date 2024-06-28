import Footer from "../../components/Footer/Footer";
import HeaderMain from "../../components/Header/HeaderMain";
import Services from "../../components/Services/Services";
import { Wrapper } from "../../globalStyles";

const ServicesPage = () => {
  return (
    <main>
      <HeaderMain />
      <Wrapper>
        <Services />
      </Wrapper>
      <Footer />
    </main>
  );
};

export default ServicesPage;
