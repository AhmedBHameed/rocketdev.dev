import {gql} from '@apollo/client';
import COURSE_FRAGMENT from './fragments/COURSE_FRAGMENT.gql';

const LIST_COURSES_QUERY = gql`
  ${COURSE_FRAGMENT}
  query ListCourses($query: String!) {
    totalCourses
    listCourses(query: $query) {
      ...courseFragment
    }
  }
`;

export default LIST_COURSES_QUERY;
