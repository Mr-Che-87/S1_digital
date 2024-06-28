import { TeamBox, TeamItemsBox, TeamTitle, TeamTitleBox } from "./styles";
import { teamData } from "../../../../constans/teamData";
import TeamBlock from "../TeamBlock/TeamBlock";
const Team = () => {
  return (
    <TeamBox>
      <TeamTitleBox>
        <TeamTitle>Команда</TeamTitle>
      </TeamTitleBox>
      <TeamItemsBox>
        {teamData.map((item, index) => (
          <TeamBlock key={index} imgUrl={item.imgUrl} title={item.title} text={item.text} />
        ))}
      </TeamItemsBox>
    </TeamBox>
  );
};

export default Team;
