import {gql} from '@apollo/client';

const LIST_POST_QUERY = gql`
  query ListPosts($input: ListPostCollateInput) {
    listPosts(input: $input) {
      id
      slug
      nanoId
      postImage
      authorId
      author {
        email
        avatar
        name {
          first
          last
        }
      }
      body
      readingTime
      isPremium
      lang
      visibility
      publishedAt
      metaTags {
        description
        injectCssStyle
        injectHeader
      }
      tagIds
      tags {
        id
        imgSrc
        name
        description
      }
      prevPostId
      nextPostId
      createdAt
      updatedAt
    }
  }
`;

export default LIST_POST_QUERY;
