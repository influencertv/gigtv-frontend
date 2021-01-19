import { gql } from 'graphql-request'

export const COMMENTS_BY_ARTICLE_ID_QUERY = gql`
  query CommentsByArticleId($id: ID!) {
    comments(where: { article: { id: $id } }, sort: "created_at:desc") {
      id
      text
      user {
        id
        username
      }
    }
  }
`
