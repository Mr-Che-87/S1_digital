import { useState } from "react";

import BlogBlock from "../BlogItem/BlogBlock";
import {
  BlogItemsBox,
  BlogText,
  BlogFilterMenu,
  BlogFilterButton,
  BlogTitle,
  BlogTitleBox,
  BlogBox,
  BlogButton
} from "../../pages/BlogsPage/styles";

import { blogData } from "../../constans/blogData";
//import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";


interface BlogProps {
  showText?: boolean; // новый пропс для показа текста
}


const BlogForMain = ({ showText = true }: BlogProps) => {
  const [visibleCount, setVisibleCount] = useState(3);  //3 - максимально статей показывается по умолчанию (без учёта фильтров)



  const handleShowLess = () => {
    setVisibleCount(6); // показывает только 3 статьи
  };
  const handleLoadMore = () => {
    setVisibleCount(blogData.length); // показывает все
  };


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
        {blogData.slice(0, visibleCount).map((item, index) => (
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
          {visibleCount < blogData.length ? (
            <Button type="color" variant="" handler={handleLoadMore}>
              Смотреть ещё
            </Button>
          ) : (
            <Button type="color" variant="" handler={handleShowLess}>
              Скрыть часть статей
            </Button>
          )}
        </BlogButton>
     
    </BlogBox>
   
  );
};

export default BlogForMain;
