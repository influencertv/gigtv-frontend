import client from './graphql-client'
import {
  ARTICLE_QUERY,
  ARTICLES_QUERY,
  FEATURED_ARTICLES_QUERY,
  LATEST_ARTICLES_BY_CATEGORY_QUERY,
} from './queries/article'
import {
  ArticlesQuery,
  ArticlesQueryVariables,
  ArticleQuery,
  ArticleQueryVariables,
  FeaturedArticlesQuery,
  LatestArticlesByCategoryQuery,
  LatestArticlesByCategoryQueryVariables,
} from 'generated/graphql'

export class ArticleAPI {
  static async getAll(variables?: ArticlesQueryVariables) {
    const data = await client.request<ArticlesQuery, ArticlesQueryVariables>(
      ARTICLES_QUERY,
      variables
    )

    return data.articles
  }

  static async getLatestOpinions() {
    const data = await ArticleAPI.getAll({
      limit: 5,
      where: { article_type: { name: 'Opinions' } },
    })
    return data
  }

  static async getOne(id: string) {
    const data = await client.request<ArticleQuery, ArticleQueryVariables>(
      ARTICLE_QUERY,
      { id }
    )

    return data.article
  }

  static async getFeatured() {
    const data = await client.request<FeaturedArticlesQuery>(
      FEATURED_ARTICLES_QUERY
    )

    return data.featuredArticles
  }

  static async getLatestByCategory(categoryID: string) {
    const data = await client.request<
      LatestArticlesByCategoryQuery,
      LatestArticlesByCategoryQueryVariables
    >(LATEST_ARTICLES_BY_CATEGORY_QUERY, { categoryID })

    return data.articles
  }
}
