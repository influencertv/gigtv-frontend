import { gql } from 'graphql-request'

export const CATEGORY_IDS = gql`
  query CategoryIds {
    categories {
      id
    }
  }
`

export const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      name
      description
      featuredArticle {
        id
        title
        excerpt
        image {
          url
          width
          height
          alternativeText
        }
      }
    }
  }
`

export const CATEGORY_QUERY = gql`
  query Category($id: ID!, $limit: Int!) {
    category(id: $id) {
      id
      name
      description
      image {
        url
        width
        height
        alternativeText
      }
      featuredArticle {
        id
        title
        excerpt
        content
        image {
          url
          width
          height
          alternativeText
        }
      }
      articles(limit: $limit, sort: "posted_at:desc") {
        id
        title
        content
        excerpt
        image {
          url
          width
          height
          alternativeText
        }
        category {
          id
          name
        }
        posted_at
      }
    }
  }
`
