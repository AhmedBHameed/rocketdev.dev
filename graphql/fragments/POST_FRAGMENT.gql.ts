import {gql} from '@apollo/client';

const POST_FRAGMENT = gql`
  fragment postFragment on Post {
    id
    slug
    nanoId
    authorId
    isPremium
    visibility
    tagIds
    type
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
`;

export default POST_FRAGMENT;
