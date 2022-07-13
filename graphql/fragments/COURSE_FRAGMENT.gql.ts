import {gql} from '@apollo/client';
import AUTHOR_FRAGMENT from './AUTHOR_FRAGMENT.gql';
import TAG_FRAGMENT from './TAG_FRAGMENT.gql';

const COURSE_FRAGMENT = gql`
  ${TAG_FRAGMENT}
  ${AUTHOR_FRAGMENT}
  fragment courseFragment on Course {
    id
    slug
    description
    nanoId
    author {
      ...authorFragment
    }
    tags {
      ...tagFragment
    }
    visibility
    image
    isPremium
    lang
    postIds
    publishedAt
    accessedByUserIds
  }
`;

export default COURSE_FRAGMENT;
