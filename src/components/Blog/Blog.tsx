import BlogBlock from "../BlogItem/BlogBlock";
import {
  BlogBox,
  BlogItemsBox,
  BlogText,
  BlogTitle,
  BlogTitleBox,
  BlogButton
} from "./styles";

import { blogData } from "../../constans/blogData";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";


interface BlogProps {
  showText?: boolean; // новый пропс для показа текста
}


const Blog = ({ showText = true }: BlogProps) => {
  return (
    <BlogBox>
      <BlogTitleBox>
        <BlogTitle>Блог</BlogTitle>
      </BlogTitleBox>
      {showText && (
        <BlogText>
          Мы не просто делаем продвижение, мы создаём
          <br />
          маркетинговые системы, которые двигают ваш бизнес вперед
        </BlogText>
      )}
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
     
      <BlogButton> 
        <Button type="color" variant="">все статьи</Button>  {/*КУДА ВЕДЁТ?*/}
      </BlogButton> 
     
    </BlogBox>
   
  );
};

export default Blog;
