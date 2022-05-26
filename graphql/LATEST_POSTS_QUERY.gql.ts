import {gql} from '@apollo/client';

const LATEST_POSTS_QUERY = gql`
  query ListPosts($input: ListPostCollateInput, $lang: LanguageEnum) {
    listPosts(input: $input) {
      data {
        id
        slug
        nanoId
        authorId
        isPremium
        visibility
        tagIds
        postContents(lang: $lang) {
          postImage
          lang
          contentPreview
          readingTime
          metaTags {
            injectHeader
            injectCssStyle
            description
          }
          publishedAt
          createdAt
          updatedAt
        }
        tags {
          id
          imgSrc
          name
          description
        }
        author {
          email
          avatar
          name {
            first
            last
          }
        }
        prevPostId
        nextPostId
        createdAt
        updatedAt
      }

      totalCount
      page {
        number
        size
      }
    }
  }
`;

export default LATEST_POSTS_QUERY;
