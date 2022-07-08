import {gql} from '@apollo/client';
import TAG_FRAGMENT from './TAG_FRAGMENT.gql';

const POST_FRAGMENT = gql`
  ${TAG_FRAGMENT}
  fragment postFragment on Post {
    id
    slug
    nanoId
    groupName
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
      ...tagFragment
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
