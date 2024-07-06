import {
  WelcomeBox,
  WelcomeBackground,
  WelcomeTitle,
  WelcomeDescriptionBox,
  WelcomeDescription,
  WelcomeContent,
} from "./styles";

const  Welcome = () => {

  return (
    <WelcomeBox>
      <WelcomeBackground />
      <WelcomeContent>
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
      
      </WelcomeContent>
    </WelcomeBox>
  );
};

export default  Welcome;
