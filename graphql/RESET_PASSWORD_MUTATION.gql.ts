import {gql} from '@apollo/client';

const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPassword($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      message
    }
  }
`;

export default RESET_PASSWORD_MUTATION;
