import {gql} from '@apollo/client';

const DELETE_COURSE_MUTATION = gql`
  mutation DeleteCourse($id: ID!) {
    mutator {
      deleteCourse(id: $id) {
        id
      }
    }
  }
`;

export default DELETE_COURSE_MUTATION;
