import { useParams } from "react-router-dom";
import { blogData } from "../../constans/blogData";
import {
  BlockTextItem,
  BlockTitleItem,
  DataBox,
  Faq,
  FaqText,
  FaqTitle,
  HeadingBlog,
  HistoryBox,
  HistoryLink,
  ItemBox,
  List,
  ListItem,
  ListTitle,
  PhotoBlock,
  PhotoBox,
  PhotoText,
  PhotoTextBlock,
  TextHeading,
  TitleHeading,
  VideoBlock,
  VideoTexBox,
  VideoText,
  WrapperBlg,
} from "./styles";
import HeaderMain from "../../components/Header/HeaderMain";
import Footer from "../../components/Footer/Footer";
import React from "react";
import { BlogsInterface } from "../../interfaces/blogsInterface";

const BlogPage = () => {
  const params = useParams();
  const blogItem = blogData.find((item) => item.link === params.blog)!;
  return (
    <main>
      <HeaderMain />
      <HeadingBlog $pageImg={blogItem.pageImg}>
        <HistoryBox>
          <HistoryLink to={"/"}>Главная</HistoryLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
          >
            <path
              d="M1 7.5L5 4L1 0.5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <HistoryLink to={"/blogs"}>блоги</HistoryLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
          >
            <path
              d="M1 7.5L5 4L1 0.5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <HistoryLink to={`/blog/${blogItem?.link}`}>
            {blogItem.title}
          </HistoryLink>
        </HistoryBox>
        <TitleHeading>{blogItem.title}</TitleHeading>
        <TextHeading>{blogItem.text}</TextHeading>
      </HeadingBlog>
      <WrapperBlg>
        <DataBox>
          {blogItem.blogData.map((item: BlogsInterface, index) => (
            <React.Fragment key={index}>
              {item.list ? (
                <ItemBox>
                  <BlockTitleItem>{item.title}</BlockTitleItem>
                  {item.textTop &&
                    item.textTop.map((text, textIndex) => (
                      <BlockTextItem key={textIndex}>{text}</BlockTextItem>
                    ))}
                  {item.subTitle && <ListTitle>{item.subTitle}</ListTitle>}
                  <List>
                    {item.list.map((listItem, listItemIndex) => (
                      <ListItem
                        dangerouslySetInnerHTML={{ __html: listItem }}
                        key={listItemIndex}
                      ></ListItem>
                    ))}
                  </List>
                  {item.textBottom &&
                    item.textBottom.map((text, textIndex) => (
                      <BlockTextItem key={textIndex}>{text}</BlockTextItem>
                    ))}
                </ItemBox>
              ) : item.block ? (
                <ItemBox>
                  <BlockTitleItem>{item.title}</BlockTitleItem>
                  {item.block.map((blockItem, blockIndex) => (
                    <BlockTextItem key={blockIndex}>{blockItem}</BlockTextItem>
                  ))}
                </ItemBox>
              ) : null}
            </React.Fragment>
          ))}
        </DataBox>
        {blogItem.video ? (
          <VideoBlock>
            <div>
              <iframe
                width="400"
                height="300"
                src={blogItem.video}
                title={blogItem.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <VideoTexBox>
              {blogItem.videoText.map((item, index) => (
                <VideoText key={index}>{item}</VideoText>
              ))}
            </VideoTexBox>
          </VideoBlock>
        ) : blogItem.photo ? (
          <PhotoBlock>
            <PhotoBox />
            <PhotoTextBlock>
              {blogItem.photoText.map((item, index) => (
                <PhotoText key={index}>{item}</PhotoText>
              ))}
            </PhotoTextBlock>
          </PhotoBlock>
        ) : null}
        <Faq>
          <BlockTitleItem>Вопрос-ответ:</BlockTitleItem>
          {blogItem.faq.map((item, index) => (
            <div key={index}>
              <FaqTitle>{item.title}</FaqTitle>
              <FaqText>{item.text}</FaqText>
            </div>
          ))}
        </Faq>
      </WrapperBlg>
      <Footer />
    </main>
  );
};

export default BlogPage;
