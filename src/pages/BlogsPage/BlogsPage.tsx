import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setFilter } from "../../services/slices/blogFilterSlice";

import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import {
  BlogItemsBox,
  BlogText,
  BlogNavMenu,
  BlogFilterButton,
  BlogTitle,
  BlogTitleBox,
  BlogBox,
  BlogButton
} from "../../components/Blog/styles";

import BlogBlock from "../../components/BlogItem/BlogBlock";
import Footer from "../../components/Footer/Footer";
import HeaderMain from "../../components/Header/HeaderMain";
import { blogData } from "../../constans/blogData";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const BlogsPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.blogFilter);
  const [visibleCount, setVisibleCount] = useState(6);  //6 - максимально статей показывается по умолчанию (без учёта фильтров)

  const filteredBlogData = blogData.filter((item) =>
    filter === "all-directions" ? true : item.filtertype === filter
  );

  const handleFilterChange = (filtertype: string) => {
    dispatch(setFilter(filtertype));
    setVisibleCount(6); // сброс видимого количества статей при смене фильтра
  };

  const handleShowLess = () => {
    setVisibleCount(6); // показывает только 6 статей
  };
  const handleLoadMore = () => {
    setVisibleCount(filteredBlogData.length); // показывает все
  };


  return (
    <main>
      <HeaderMain />
      <BlogBox>
      <BlogTitleBox>
        <BlogTitle>Блог</BlogTitle>
      </BlogTitleBox>
      <BlogText>
        Мы не просто делаем продвижение, мы создаём
        <br />
        маркетинговые системы, которые двигают ваш бизнес вперед
      </BlogText>
      <BlogNavMenu>
        <BlogFilterButton onClick={() => handleFilterChange("all-directions")}>
          Все направления
        </BlogFilterButton>
        <BlogFilterButton onClick={() => handleFilterChange("neural")}>
          Нейросети для продвижения
        </BlogFilterButton>
        <BlogFilterButton onClick={() => handleFilterChange("seo")}>
          SEO
        </BlogFilterButton>
        <BlogFilterButton onClick={() => handleFilterChange("website-dev")}>
          Разработка сайтов
        </BlogFilterButton>
        <BlogFilterButton onClick={() => handleFilterChange("context-adv")}>
          Контекстная реклама
        </BlogFilterButton>
        <BlogFilterButton onClick={() => handleFilterChange("smm")}>
          SMM
        </BlogFilterButton>
        <BlogFilterButton onClick={() => handleFilterChange("target-adv")}>
          Таргетированная реклама
        </BlogFilterButton>
        <BlogFilterButton onClick={() => handleFilterChange("analytics")}>
          Аналитика
        </BlogFilterButton> 
      </BlogNavMenu>
      <BlogItemsBox>
        {filteredBlogData.slice(0, visibleCount).map((item, index) => (
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
      
      {filteredBlogData.length > 6 && (
      <BlogButton>
          {visibleCount < filteredBlogData.length ? (
            <Button type="color" variant="" handler={handleLoadMore}>
              Смотреть ещё
            </Button>
          ) : (
            <Button type="color" variant="" handler={handleShowLess}>
              Скрыть часть статей
            </Button>
          )}
        </BlogButton>
        )}
      </BlogBox>
      <Footer />
    </main>
  );
};

export default BlogsPage;
