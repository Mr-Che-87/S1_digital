import { Link } from "react-router-dom";
import styled from "styled-components";
interface props {
  $pageImg?: string;
}
export const WrapperBlg = styled.div`
  padding-left: calc(50% - 541px);
  padding-right: calc(50% - 541px);
`;
export const HeadingBlog = styled.div<props>`
  background-image: url(${(props) => props.$pageImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 60px;
  padding-bottom: 330px;
  padding-left: calc(50% - 581px);
`;
export const TitleHeading = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  max-width: 960px;
  margin-bottom: 40px;
`;
export const TextHeading = styled.p`
  color: ${({ theme }) => theme.colors.white};
  max-width: 680px;
  font-weight: 400;
  line-height: 139.99%;
`;
export const VideoBlock = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const VideoTexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const VideoText = styled.p`
  font-style: normal;
  line-height: 139.99%;
  max-width: 660px;
`;
export const PhotoBlock = styled.div``
export const PhotoBox = styled.div``
export const PhotoTextBlock = styled.div``
export const PhotoText = styled.p``
export const HistoryBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 61px;
`;
export const HistoryLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
`;
export const BlockTitleItem = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
export const BlockTextItem = styled.p`
  font-weight: 400;
  line-height: 139.99%;
  max-width: 1100px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 60px;
  list-style-position: inside;
`;
export const ListItem = styled.li`
  font-weight: 400;
  line-height: 139.99%;
  max-width: 1100px;
`;
export const ListTitle = styled.h3`
  margin-bottom: 20px;
`;
export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-top: 80px;
`;
export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Faq = styled.div`
  margin-top: 80px;
  margin-bottom: 180px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const FaqTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 700;
  line-height: 139.99%;
`;
export const FaqText = styled.p`
  font-weight: 400;
  line-height: 139.99%;
  max-width: 1100px;
`;
