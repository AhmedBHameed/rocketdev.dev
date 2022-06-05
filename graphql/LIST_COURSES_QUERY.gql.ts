import {gql} from '@apollo/client';

const LIST_COURSES_QUERY = gql`
  query ListCourses($input: ListCourseCollateInput!) {
    listCourses(input: $input) {
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
  }
`;

export default LIST_COURSES_QUERY;
