import {gql} from '@apollo/client';

const FORGOT_PASSWORD_MUTATION = gql`
  mutation ForgotPassword($email: EmailAddress!) {
    forgotPassword(email: $email) {
      message
    }
  }
`;

export default FORGOT_PASSWORD_MUTATION;
