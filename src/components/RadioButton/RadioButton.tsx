import { RadioButtonBorder, Shell, CheckedIndicator } from "./styles";

interface RadioButtonProps {
  checked: boolean;
  onClick: () => void;
}

const RadioButton = ({ checked, onClick }: RadioButtonProps) => {
  return (
    <Shell onClick={onClick}>
      <RadioButtonBorder>
        {checked && <CheckedIndicator>✔</CheckedIndicator>}
      </RadioButtonBorder>
    </Shell>
  );
};

export default RadioButton;
