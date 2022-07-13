import {gql} from '@apollo/client';

const AUTHOR_FRAGMENT = gql`
  fragment authorFragment on User {
    email
    avatar
    name {
      first
      last
    }
  }
`;

export default AUTHOR_FRAGMENT;
