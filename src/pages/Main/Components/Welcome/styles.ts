import styled from "styled-components";

export const WelcomeBox = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  overflow: hidden;
  margin: 0;
`;

export const WelcomeContent = styled.div`
  padding-left: calc(50% - 590px);
  padding-right: calc(50% - 590px); 
  margin-left: 20px;
  margin-right: 10px;
  @media (max-width: 1024px) {
    max-width: 800px;
  }
  @media (max-width: 700px) {
    margin-left: 0;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

export const WelcomeBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/welcomeBackground.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

export const WelcomeTitle = styled.h1`
  margin-top: 86px;
  font-family: "OpenSansBold";
  line-height: 68px;
  color: white;
  @media (max-width: 1440px) {
    font-size: 48px;
  }
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 50px;
  }
  @media (max-width: 700px) {
    font-size: 28px;
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
  }
  @media (max-width: 460px) {
    font-size: 22px;
  }
`;

export const WelcomeDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 27px;
  margin-bottom: 157px;
  @media (max-width: 1024px) {
    margin-bottom: 100px;
  }
  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const WelcomeDescription = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: white;
  max-width: 580px;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 700px) {
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;



// import styled from "styled-components";

// export const WelcomeBox = styled.section`
//   position: relative; /* Относительное позиционирование для родителя */
//   width: 100%;
//   height: auto;
//   overflow: hidden;
//   margin: 0;
//   padding-left: calc(50% - 470px);
//   padding-right: calc(50% - 601px);
//   box-sizing: unset;
// `;

// export const WelcomeBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100%;
//   background-image: url("/images/welcomeBackground.png");
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   z-index: -1; /* Помещаем фон позади контента */
  
// `;

// export const WelcomeTitle = styled.h1`
//   margin-top: 120px;
//   font-family: "OpenSansBold";
//   line-height: 68px;
//   color: white;
// `;

// export const WelcomeDescriptionBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 120px;
// `;

// export const WelcomeDescription = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   color: white;
// `;





// import styled from "styled-components";

// export const WelcomeBox = styled.section`
// width: 100vw; /* элемент занимает всю ширину экрана */
// height: auto; /* Высота зависит от содержимого */
// //overflow: hidden; /* Предотвращает появление скроллов */
// margin: 0; /* нет внешних отступов */
// background-image: url("/images/welcomeBackground.png");
// background-position: center;
// background-repeat: no-repeat;
// //background-size: contain;
// background-size: cover;
// `;

  


// export const WelcomeTitle = styled.h1`
//   margin-top: 120px;
//   font-family: "OpenSansBold";
//   line-height: 68px;
//   padding-left: calc(50% - 690px);
//   padding-right: calc(50% - 273px);
//   color: white;
  
// `;

// export const WelcomeDescriptionBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 120px;
// `;
// export const WelcomeDescription = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   color: white;

// `;

