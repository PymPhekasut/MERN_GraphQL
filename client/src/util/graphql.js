import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`
  query getAllPost {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
