import {
  TeamBlockBox,
  TeamImg,
  TeamText,
  TeamBlockTitle,
  TeamTitleShell,
  TeamIconBox,
} from "./styles";
interface TeamBlockProps {
  imgUrl: string;
  title: string;
  text: string;
}

const TeamBlock = ({ imgUrl, title, text }: TeamBlockProps) => {
  return (
    <TeamBlockBox>
      <TeamImg src={imgUrl} alt={imgUrl} />
      <TeamTitleShell>
        <TeamBlockTitle>{title}</TeamBlockTitle>
      </TeamTitleShell>
      <TeamText>{text}</TeamText>
      <TeamIconBox />
    </TeamBlockBox>
  );
};

export default TeamBlock;
