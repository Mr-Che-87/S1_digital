// styles.ts:
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
`;

export const WelcomeDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 27px;
  margin-bottom: 157px;
`;

export const WelcomeDescription = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: white;
  width: 580px;
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

