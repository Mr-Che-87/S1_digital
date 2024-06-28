import { InputStyled } from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
  minWidth: string;
  id: string;
}

const Input = ({ type, placeholder, minWidth, id }: InputProps) => {
  return (
    <InputStyled
    autoComplete="off"
      id={id}
      $minWidth={minWidth}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
