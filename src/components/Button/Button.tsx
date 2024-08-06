import { ReactNode } from "react";
import { ArrowSvg, ButtonStyled } from "./styles";

interface ButtonProps {
  children: ReactNode;
  variant: string;
  type: string;
  handler?: (e: React.MouseEvent<HTMLButtonElement>) => void;   // handler?: () => void; 
}

const Button = ({ children, handler, variant, type}: ButtonProps) => {
  return (
    <ButtonStyled $type={type} $variant={variant} onClick={handler}>
      {children}
      <ArrowSvg 
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        $type={type}
        
      >
        <path d="M7 7L17 17" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 7V17H7" strokeLinecap="round" strokeLinejoin="round" />
      </ArrowSvg>
    </ButtonStyled>
  );
};

export default Button;
