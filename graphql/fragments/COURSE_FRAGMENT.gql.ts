import {gql} from '@apollo/client';

const COURSE_FRAGMENT = gql`
  fragment courseFragment on Course {
    id
    slug
    author {
      email
      avatar
      name {
        first
        last
      }
    }
    tagIds
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
