import { 
  InputStyled,
  SelectStyled,
  TextAreaStyled,
 } from "./styles";

interface InputProps {
  id: string;
  type:  string;      //"text" | "tel" | "email" | "select" | "textarea";
  placeholder: string;
  minWidth: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  options?: string[];  // Only for select type
}

const Input = ({ id, type, placeholder, minWidth, value, onChange, options }: InputProps) => {
  if (type === "select") {
    return (
      <SelectStyled
        id={id}
        $minWidth={minWidth}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>{placeholder}</option>
        {options && options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </SelectStyled>
    );
  }

    if (type === "textarea") {
    return (
      <TextAreaStyled
        id={id}
        $minWidth={minWidth}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  } 

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