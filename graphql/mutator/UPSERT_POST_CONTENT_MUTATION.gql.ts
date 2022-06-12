import {gql} from '@apollo/client';

const UPSERT_POST_CONTENT_MUTATION = gql`
  mutation UpsertPostContent($postId: ID!, $input: UpsertPostContentInput!) {
    mutator {
      upsertPostContent(postId: $postId, input: $input) {
        id
        postImage
        lang
        body
        contentPreview
        readingTime
        metaTags {
          injectHeader
          injectCssStyle
          description
        }
        publishedAt
        createdAt
        updatedAt
      }
    }
  }
`;

export default UPSERT_POST_CONTENT_MUTATION;
