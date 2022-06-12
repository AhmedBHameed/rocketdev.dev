import {gql} from '@apollo/client';

const DELETE_POST_MUTATION = gql`
  mutation DeletePost($id: ID!) {
    mutator {
      deletePost(id: $id) {
        id
      }
    }
  }
`;

export default DELETE_POST_MUTATION;
