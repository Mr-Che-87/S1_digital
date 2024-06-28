import {
  WeDoItem,
  WeDoItemBoldText,
  WeDoItemText,
  WeDoItemTextBox,
} from "./styles";

interface WeDoListItemProps {
  name: string;
  title: string;
  text: string;
  variant: string;
}

const WeDoListItem = ({ name, title, text, variant }: WeDoListItemProps) => {
  return (
    <>
      <WeDoItem>{name}</WeDoItem>
      <WeDoItemTextBox>
        <WeDoItemBoldText>{title}</WeDoItemBoldText>
        <WeDoItemText $variant={variant}>{text}</WeDoItemText>
      </WeDoItemTextBox>
    </>
  );
};

export default WeDoListItem;
