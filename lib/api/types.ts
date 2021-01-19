import {
  ArticleQuery,
  ArticlesQuery,
  FeaturedArticlesQuery,
  LatestArticlesByCategoryQuery,
  CategoryQuery,
  CategoriesQuery,
  SiteQuery,
} from 'generated/graphql'

export type ArticleType = ArticleQuery['article']
export type CategoryType = CategoryQuery['category']
export type FeaturedArticlesType = FeaturedArticlesQuery['featuredArticles']
export type ArticlesType = ArticlesQuery['articles']

export type LatestArticlesByCategoryType = LatestArticlesByCategoryQuery['articles']
export type LatestArticlesType = {
  [categoryName: string]: LatestArticlesByCategoryType
}
export type CategoriesType = CategoriesQuery['categories']
// export type CategoryType = CategoriesType[0]
export type SiteType = SiteQuery['site']
