import {gql} from '@apollo/client';
import COURSE_FRAGMENT from './fragments/COURSE_FRAGMENT.gql';

const LIST_COURSES_QUERY = gql`
  ${COURSE_FRAGMENT}
  query ListCourses($input: ListCourseCollateInput!) {
    listCourses(input: $input) {
      ...courseFragment
    }
  }
`;

export default LIST_COURSES_QUERY;
