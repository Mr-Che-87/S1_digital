import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import {
  BlogItemsBox,
  BlogText,
  BlogTitle,
  BlogTitleBox,
  BlogBox
} from "../../components/Blog/styles";
import BlogBlock from "../../components/BlogItem/BlogBlock";
import Footer from "../../components/Footer/Footer";
import HeaderMain from "../../components/Header/HeaderMain";
import { blogData } from "../../constans/blogData";

const BlogsPage = () => {
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
      <Footer />
    </main>
  );
};

export default BlogsPage;
