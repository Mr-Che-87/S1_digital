import BlogBlock from "../BlogItem/BlogBlock";
import {
  BlogBox,
  BlogItemsBox,
  BlogText,
  BlogTitle,
  BlogTitleBox,
} from "./styles";
import { blogData } from "../../constans/blogData";
const Blog = () => {
  return (
    <BlogBox>
      <BlogTitleBox>
        <BlogTitle>Блог</BlogTitle>
      </BlogTitleBox>
      <BlogText>
        Мы не просто делаем продвижение, мы создаём
        <br />
        маркетинговые системы, которые двигают ваш бизнес вперед
      </BlogText>
      <BlogItemsBox>
        {blogData.map((item, index) => (
          <BlogBlock
            img={item.img}
            link={item.link}
            key={index}
            title={item.title}
            text={item.text}
            date={item.date}
          />
        ))}
      </BlogItemsBox>
    </BlogBox>
  );
};

export default Blog;
