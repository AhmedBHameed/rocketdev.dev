import {gql} from '@apollo/client';

const UPSERT_AUTHORIZATION_MUTATION = gql`
  mutation UpsertAuthorization($input: AuthorizationInput!) {
    upsertAuthorization(input: $input) {
      id
      userId
      actions {
        name
        permissions
      }
      createdAt
      updatedAt
    }
  }
`;

export default UPSERT_AUTHORIZATION_MUTATION;
