import styled from "styled-components";

export const LinkBannerBox = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  overflow: hidden;
  margin: 0;
`;

export const LinkBannerContent = styled.div`
  padding-left: calc(50% - 590px);
  padding-right: calc(50% - 590px); 
  margin-left: 10px;
  margin-right: 10px;
`;

export const LinkBannerBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/LinkBannerBackground.png");
  //background: linear-gradient(rgba(8, 8, 18, 0.8), rgba(8, 8, 18, 0.5)), url("/images/LinkBannerBackground.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

export const LinkBannerTitle = styled.h1`
  margin-top: 86px;
  font-family: "OpenSansBold";
  line-height: 68px;
  color: white;
`;

export const LinkBannerButton1 = styled.button`
  
`;

export const LinkBannerButton2 = styled.button`
  
`;



// import styled from "styled-components";

// export const LinkBannerBox = styled.section`
//   position: relative; /* Относительное позиционирование для родителя */
//   width: 100%;
//   height: auto;
//   overflow: hidden;
//   margin: 0;
//   padding-left: calc(50% - 470px);
//   padding-right: calc(50% - 601px);
//   box-sizing: unset;
// `;

// export const LinkBannerBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100%;
//   background-image: url("/images/LinkBannerBackground.png");
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   z-index: -1; /* Помещаем фон позади контента */
  
// `;

// export const LinkBannerTitle = styled.h1`
//   margin-top: 120px;
//   font-family: "OpenSansBold";
//   line-height: 68px;
//   color: white;
// `;

// export const LinkBannerDescriptionBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 120px;
// `;

// export const LinkBannerDescription = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   color: white;
// `;





// import styled from "styled-components";

// export const LinkBannerBox = styled.section`
// width: 100vw; /* элемент занимает всю ширину экрана */
// height: auto; /* Высота зависит от содержимого */
// //overflow: hidden; /* Предотвращает появление скроллов */
// margin: 0; /* нет внешних отступов */
// background-image: url("/images/LinkBannerBackground.png");
// background-position: center;
// background-repeat: no-repeat;
// //background-size: contain;
// background-size: cover;
// `;

  


// export const LinkBannerTitle = styled.h1`
//   margin-top: 120px;
//   font-family: "OpenSansBold";
//   line-height: 68px;
//   padding-left: calc(50% - 690px);
//   padding-right: calc(50% - 273px);
//   color: white;
  
// `;

// export const LinkBannerDescriptionBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 120px;
// `;
// export const LinkBannerDescription = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   color: white;

// `;

