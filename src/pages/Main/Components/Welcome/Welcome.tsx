import { Link, useNavigate } from "react-router-dom";
// import Button from "../../../../components/Button/Button";
// import VkLink from "../../../../components/VkLink/VkLink";
import {
  WelcomeBox,
  WelcomeTitle,
  WelcomeDescriptionBox,
  WelcomeDescription,
} from "./styles";

const  Welcome = () => {
  // const navigate = useNavigate();
  // const handler = () => {
  //   navigate("/services");
  // };

  return (
    <WelcomeBox>
      <WelcomeTitle>
      Добро пожаловать в мир маркетингового будущего!  
      </WelcomeTitle>
      
      <WelcomeDescriptionBox>
        <WelcomeDescription>
        Мы - маркетинговое AI-агентство, которое использует передовые технологии с использованием нейросети, чтобы помочь вашему бизнесу достичь новых высот!
        <br />
        Мы предлагаем уникальное решение, которое загрузит ваш отдел продаж «под крышку» и обеспечит максимальную эффективность в продвижении и привлечении клиентов.
        </WelcomeDescription>
      </WelcomeDescriptionBox>
    </WelcomeBox>
  );
};

export default  Welcome;
