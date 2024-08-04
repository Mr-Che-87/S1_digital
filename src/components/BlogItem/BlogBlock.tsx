import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {
  BlogItemBox,
  BlogImgWrapper,
  BlogImg,
  BlogImgTitle,
  BlogDate,
  BlogItemTitle,
  BlogItemText,
  BlogButtonWrapper,
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
      <BlogImgWrapper>
        <BlogImg src={`/images/blogs/${img}`} alt="img" />
        <BlogImgTitle>{getCutText(title)}</BlogImgTitle>
      </BlogImgWrapper>
     
      <BlogDate>{date}</BlogDate>
      <BlogItemTitle>{getCutText(title)}</BlogItemTitle>
      <BlogItemText>{text}</BlogItemText>
      <Link to={`/blog/${link}`}>
        <BlogButtonWrapper>
        <Button variant="short" type="normal">
          Подробнее
        </Button>
        </BlogButtonWrapper>
      </Link>
    </BlogItemBox>
  );
};

export default BlogBlock;
