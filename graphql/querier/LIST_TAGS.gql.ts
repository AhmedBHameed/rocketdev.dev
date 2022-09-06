import {gql} from '@apollo/client';

const LIST_QUERIER_TAGS_QUERY = gql`
  query ListQuerierTags($query: String) {
    querier {
      totalTags
      listTags(query: $query) {
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

export default LIST_QUERIER_TAGS_QUERY;
