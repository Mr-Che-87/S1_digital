import { InputStyled } from "./styles";

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  minWidth: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, type, placeholder, minWidth, value, onChange }: InputProps) => {
  return (
    <InputStyled
    autoComplete="off"
      id={id}
      $minWidth={minWidth}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
