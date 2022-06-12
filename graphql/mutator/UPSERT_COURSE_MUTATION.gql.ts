import {gql} from '@apollo/client';
import COURSE_FRAGMENT from '../fragments/COURSE_FRAGMENT.gql';

const UPSERT_COURSE_MUTATION = gql`
  ${COURSE_FRAGMENT}
  mutation UpsertCourse($input: UpsertCourseInput!) {
    mutator {
      upsertCourse(input: $input) {
        ...courseFragment
      }
    }
  }
`;

export default UPSERT_COURSE_MUTATION;
