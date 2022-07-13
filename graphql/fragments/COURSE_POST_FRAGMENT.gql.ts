import {gql} from '@apollo/client';
import TAG_FRAGMENT from './TAG_FRAGMENT.gql';
import AUTHOR_FRAGMENT from './AUTHOR_FRAGMENT.gql';

const COURSE_POST_FRAGMENT = gql`
  ${TAG_FRAGMENT}
  ${AUTHOR_FRAGMENT}
  fragment querierPostFragment on Post {
    id
    slug
    isPremium
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
      ...authorFragment
    }
    prevPostId
    nextPostId
    createdAt
    updatedAt
  }
`;

export default COURSE_POST_FRAGMENT;
