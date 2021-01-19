import { gql } from 'graphql-request'

export const FULL_ARTICLE_FRAGMENT = gql`
  fragment FullArticleFields on Article {
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
    author
    posted_at
  }
`

export const ARTICLE_CARD_FRAGMENT = gql`
  fragment ArticleCardFields on Article {
    id
    title
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
    author
    posted_at
  }
`

export const FEATURED_ARTICLES_QUERY = gql`
  query FeaturedArticles {
    featuredArticles {
      article {
        id
        title
        excerpt
        author
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
      }
    }
  }
`

export const ARTICLES_QUERY = gql`
  query Articles($limit: Int, $where: JSON) {
    articles(limit: $limit, where: $where, sort: "posted_at:desc") {
      id
      title
      excerpt
      category {
        id
        name
      }
      image {
        url
        width
        height
        alternativeText
      }
      author
      updated_at
      created_at
    }
  }
`

export const ARTICLE_QUERY = gql`
  query Article($id: ID!) {
    article(id: $id) {
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
        image {
          url
          width
          height
          alternativeText
        }
      }
      author
      posted_at
    }
  }
`

export const LATEST_ARTICLES_BY_CATEGORY_QUERY = gql`
  ${ARTICLE_CARD_FRAGMENT}
  query LatestArticlesByCategory($categoryID: ID!) {
    articles(
      sort: "posted_at:desc"
      where: { category: { id: $categoryID } }
      limit: 4
    ) {
      ...ArticleCardFields
    }
  }
`
