import { gql } from 'graphql-request'

export const PAGES_QUERY = gql`
  query Pages {
    pages {
      id
      path
      title
      description
      content
    }
  }
`

export const PAGE_BY_PATH_QUERY = gql`
  query PageByPath($path: String!) {
    pages(where: { path: $path }) {
      id
      path
      title
      description
      content
    }
  }
`
