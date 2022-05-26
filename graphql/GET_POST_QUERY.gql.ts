import {gql} from '@apollo/client';

const GET_POST_QUERY = gql`
  query GetPost($input: PostInput!, $lang: LanguageEnum) {
    getPost(input: $input) {
      id
      slug
      nanoId
      authorId
      isPremium
      visibility
      tagIds
      postContents(lang: $lang) {
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
  }
`;

export default GET_POST_QUERY;
