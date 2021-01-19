import client from './graphql-client'
import {
  CategoriesQuery,
  CategoriesQueryVariables,
  CategoryIdsQuery,
  CategoryQuery,
  CategoryQueryVariables,
} from 'generated/graphql'
import {
  CATEGORIES_QUERY,
  CATEGORY_IDS,
  CATEGORY_QUERY,
} from './queries/category'

export class CategoryAPI {
  static async getIds() {
    const data = await client.request<CategoryIdsQuery>(CATEGORY_IDS)
    return data.categories
  }

  static async getAll() {
    const data = await client.request<
      CategoriesQuery,
      CategoriesQueryVariables
    >(CATEGORIES_QUERY)

    return data.categories
  }

  static async getOne(id: string, limit: number) {
    const data = await client.request<CategoryQuery, CategoryQueryVariables>(
      CATEGORY_QUERY,
      { id, limit }
    )
    return data.category
  }
}
