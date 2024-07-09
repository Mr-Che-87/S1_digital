import {
  WeDoItem,
  WeDoItemBoldText,
  WeDoItemText,
  WeDoItemTextBox,
  WeDoItemContainer
} from "./styles";

interface WeDoListItemProps {
  name: string;
  title: string;
  text: string;
  variant: string;
}

const WeDoListItem = ({ name, title, text, variant }: WeDoListItemProps) => {
  return (
    <WeDoItemContainer>
      <WeDoItem>{name}</WeDoItem>
      <WeDoItemTextBox>
        <WeDoItemBoldText>{title}</WeDoItemBoldText>
        <WeDoItemText $variant={variant}>{text}</WeDoItemText>
      </WeDoItemTextBox>
    </WeDoItemContainer>
  );
};

export default WeDoListItem;
