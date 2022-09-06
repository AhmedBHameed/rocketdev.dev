import {gql} from '@apollo/client';
import AUTHOR_FRAGMENT from '../fragments/AUTHOR_FRAGMENT.gql';

const LIST_QUERIER_FEEDBACK_QUERY = gql`
  ${AUTHOR_FRAGMENT}
  query ListQuerierFeedback($query: String!) {
    querier {
      totalFeedback
      listFeedback(query: $query) {
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
