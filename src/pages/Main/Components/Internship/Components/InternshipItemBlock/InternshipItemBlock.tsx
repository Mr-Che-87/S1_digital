import { ReactNode } from "react";
import { InternshipItem, InternshipItemBox } from "./styles";
interface InternshipItemBlockProps {
  text: string;
  children: ReactNode
}

const InternshipItemBlock = ({ text, children }: InternshipItemBlockProps) => {
  return (
    <InternshipItemBox>
      <InternshipItem>{text}</InternshipItem>
      {children}
    </InternshipItemBox>
  );
};

export default InternshipItemBlock;
