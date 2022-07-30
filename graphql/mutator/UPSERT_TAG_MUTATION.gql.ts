import {gql} from '@apollo/client';

const UPSERT_TAG_MUTATION = gql`
  mutation UpsertTag($input: UpsertTagInput!) {
    mutator {
      upsertTag(input: $input) {
        id
        name
        imgSrc
        description
        visibility
        color
        createdAt
        updatedAt
      }
    }
  }
`;

export default UPSERT_TAG_MUTATION;
