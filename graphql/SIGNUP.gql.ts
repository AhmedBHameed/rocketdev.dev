import {gql} from '@apollo/client';

const SIGNUP_MUTATION = gql`
  mutation Signup(
    $firstName: String!
    $lastName: String!
    $email: EmailAddress!
    $password: Password!
  ) {
    signup(
      input: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        password: $password
      }
    ) {
      message
    }
  }
`;

export default SIGNUP_MUTATION;
