import { gql } from 'graphql-request'

export const BREAKING_NEWS_QUERY = gql`
  query BreakingNews {
    breakingNew {
      text {
        content
      }
    }
  }
`
