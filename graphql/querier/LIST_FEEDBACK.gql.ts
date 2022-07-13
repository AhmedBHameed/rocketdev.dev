import {gql} from '@apollo/client';
import AUTHOR_FRAGMENT from '../fragments/AUTHOR_FRAGMENT.gql';

const LIST_QUERIER_FEEDBACK_QUERY = gql`
  ${AUTHOR_FRAGMENT}
  query ListQuerierFeedback($input: ListFeedbackCollateInput!) {
    querier {
      totalFeedback
      listFeedback(input: $input) {
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

export default LIST_QUERIER_FEEDBACK_QUERY;
