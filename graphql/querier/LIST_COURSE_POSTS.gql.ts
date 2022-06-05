import {gql} from '@apollo/client';

const LIST_QUERIER_COURSE_POSTS_QUERY = gql`
  query ListQuerierCoursePosts($ids: [String!]!) {
    querier {
      listCoursePosts(ids: $ids) {
        id
        slug
        nanoId
        lang
        isPremium
        type
        visibility
        author {
          email
          avatar
          name {
            first
            last
          }
        }
        tags {
          id
          name
          imgSrc
          description
        }
        postContents {
          id
          postImage
          lang
          body
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
        nextPostId
        prevPostId
        createdAt
        updatedAt
      }
    }
  }
`;

export default LIST_QUERIER_COURSE_POSTS_QUERY;
