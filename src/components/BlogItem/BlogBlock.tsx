import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {
  BlogDate,
  BlogImg,
  BlogItemBox,
  BlogItemText,
  BlogItemTitle,
} from "./styles";
import { getCutText } from "../../services/utils/getCutText";
interface BlogBlockProps {
  title: string;
  text: string;
  date: string;
  link: string;
  img: string;
}
const BlogBlock = ({ title, text, date, link, img }: BlogBlockProps) => {
  return (
    <BlogItemBox>
      <BlogImg src={`/images/blogs/${img}`} alt="img" />
      <BlogDate>{date}</BlogDate>
      <BlogItemTitle>{getCutText(title)}</BlogItemTitle>
      <BlogItemText>{text}</BlogItemText>
      <Link to={`/blog/${link}`}>
        <Button variant="short" type="normal">
          Подробнее
        </Button>
      </Link>
    </BlogItemBox>
  );
};

export default BlogBlock;
