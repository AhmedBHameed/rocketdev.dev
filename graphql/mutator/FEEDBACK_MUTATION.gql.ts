import {gql} from '@apollo/client';

const FEEDBACK_MUTATION = gql`
  mutation UpsertFeedback($input: FeedbackInput!) {
    mutator {
      upsertFeedback(input: $input) {
        id
        title
        message
        author {
          email
          avatar
          name {
            first
            last
          }
        }
        resolved
        createdAt
        updatedAt
      }
    }
  }
`;

export default FEEDBACK_MUTATION;
