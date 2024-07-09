import { weDoIteText } from "../../../../constans/textData";
import WeDoListItem from "./Components/WeDoListItem/WeDoListItem";
import { WeDoBox, WeDoList, WeDoTitle, WeDoTitleBox } from "./styles";

const WeDoing = () => {
  return (
    <WeDoBox>
      <WeDoTitleBox>
        <WeDoTitle>Что мы делаем</WeDoTitle>
      </WeDoTitleBox>
      <WeDoList>
        {weDoIteText.map((item, index) => (
          <WeDoListItem variant={item.width}  key={index} name={item.name} title={item.title} text={item.text}/>
        ))}
      </WeDoList>
    </WeDoBox>
  );
};

export default WeDoing;
