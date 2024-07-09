import {
  TariffsItem,
  TariffsItemBoldText,
  TariffsItemText,
  TariffsItemTextBox,
  TariffsItemContainer
} from "./styles";

interface TariffsListItemProps {
  name: string;
  title: string;
  text: string;
  variant: string;
}

const TariffsListItem = ({ name, title, text, variant }: TariffsListItemProps) => {
  return (
    <TariffsItemContainer>
      <TariffsItem>{name}</TariffsItem>
      <TariffsItemTextBox>
        <TariffsItemBoldText>{title}</TariffsItemBoldText>
        <TariffsItemText $variant={variant}>{text}</TariffsItemText>
      </TariffsItemTextBox>
    </TariffsItemContainer>
  );
};

export default TariffsListItem;
