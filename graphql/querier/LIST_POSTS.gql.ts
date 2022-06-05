import {gql} from '@apollo/client';

const LIST_QUERIER_POSTS_QUERY = gql`
  query ListQuerierPosts($input: ListPostCollateInput!) {
    querier {
      listPosts(input: $input) {
        data {
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
        totalCount
        page {
          number
          size
        }
      }
    }
  }
`;

export default LIST_QUERIER_POSTS_QUERY;
