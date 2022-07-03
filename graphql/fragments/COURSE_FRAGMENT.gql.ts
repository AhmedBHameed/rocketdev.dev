import {gql} from '@apollo/client';
import TAG_FRAGMENT from './TAG_FRAGMENT.gql';

const COURSE_FRAGMENT = gql`
  ${TAG_FRAGMENT}
  fragment courseFragment on Course {
    id
    slug
    description
    nanoId
    author {
      email
      avatar
      name {
        first
        last
      }
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
