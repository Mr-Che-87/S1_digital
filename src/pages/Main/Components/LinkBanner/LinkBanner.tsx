import {
  LinkBannerBox,
  LinkBannerBackground,
  LinkBannerContent,
  LinkBannerTitle,
  LinkBannerButton1,
  LinkBannerButton2,
} from "./styles";

const LinkBanner = () => {

  return (
    <LinkBannerBox>
      <LinkBannerBackground />
      <LinkBannerContent>
        <LinkBannerTitle>
        Мы точно знаем, что нужно делать, и не ведем долгих переговоров
        </LinkBannerTitle>
        
        <LinkBannerButton1>история болезни</LinkBannerButton1> 
        <LinkBannerButton2>примеры работ</LinkBannerButton2> 
         
      </LinkBannerContent>  
    </LinkBannerBox>
  );
};

export default  LinkBanner;
