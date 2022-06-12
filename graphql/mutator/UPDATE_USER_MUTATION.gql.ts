import {gql} from '@apollo/client';

const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
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

export default UPDATE_USER_MUTATION;
