import { gql } from 'graphql-request'

export const ARTICLE_SEARCH_QUERY = gql`
  query ArticleSearch($searchQuery: String) {
    articles(where: { title_contains: $searchQuery }) {
      id
      title
      content
      posted_at
    }
  }
`
