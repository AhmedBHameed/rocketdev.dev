import {gql} from '@apollo/client';

const TAG_FRAGMENT = gql`
  fragment tagFragment on Tag {
    id
    imgSrc
    name
    description
    color
  }
`;

export default TAG_FRAGMENT;
