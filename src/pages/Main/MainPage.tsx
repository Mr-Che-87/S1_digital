import Blog from "../../components/Blog/Blog";
import Cases from "../../components/Cases/Cases";
import Education from "./Components/Education/Education";
import HeaderMain from "../../components/Header/HeaderMain";
import Heading from "./Components/Heading/Heading";
import Services from "../../components/Services/Services";
import Team from "./Components/Team/Team";
import { AbsoluteBackground, MainBox } from "./styles";
import Internship from "./Components/Internship/Internship";
import WeDoing from "./Components/WeDoing/WeDoing";
import Trust from "./Components/Trust/Trust";
import Footer from "../../components/Footer/Footer";
import { Wrapper } from "../../globalStyles";
import Lines from "../../components/Lines/Lines";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/contacts") {
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <MainBox>
      <HeaderMain />
      <AbsoluteBackground>
        <Lines/>
      </AbsoluteBackground>
      <Wrapper>
        <Heading />
        <WeDoing />
        {/*<Services />*/}
        {/*<Cases />*/}
        <Team />
        <Blog />
        {/* <Education /> */}
        {/*<Internship /> */}
        <Trust />
      </Wrapper>
      <Footer />
    </MainBox>
  );
};

export default MainPage;
