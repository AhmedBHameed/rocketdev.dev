import {gql} from '@apollo/client';

const LIST_USERS_QUERY = gql`
  query ListUsers($input: ListUsersCollateInput!) {
    listUsers(input: $input) {
      id
      name {
        first
        last
      }
      email
      avatar
      gender
      authorization {
        id
        userId
        actions {
          name
          permissions
        }
        createdAt
        updatedAt
      }
      about
      githubUrl
      isActive
      isSuper
      address {
        state
        city
        street
        subdivision
        lane
        house
        zip
      }
      createdAt
      updatedAt
    }
  }
`;

export default LIST_USERS_QUERY;
