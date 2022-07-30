import {gql} from '@apollo/client';

const LIST_QUERIER_TAGS_QUERY = gql`
  query ListQuerierTags($input: ListTagCollateInput!) {
    querier {
      totalTags
      listTags(input: $input) {
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
