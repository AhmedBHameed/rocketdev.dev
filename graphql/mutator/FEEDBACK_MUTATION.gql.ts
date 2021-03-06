import {gql} from '@apollo/client';
import AUTHOR_FRAGMENT from '../fragments/AUTHOR_FRAGMENT.gql';

const FEEDBACK_MUTATION = gql`
  ${AUTHOR_FRAGMENT}
  mutation UpsertFeedback($input: FeedbackInput!) {
    mutator {
      upsertFeedback(input: $input) {
        id
        title
        message
        author {
          ...authorFragment
        }
        resolved
        createdAt
        updatedAt
      }
    }
  }
`;

export default FEEDBACK_MUTATION;
