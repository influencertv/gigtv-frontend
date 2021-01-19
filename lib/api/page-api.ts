import client from './graphql-client'
import { PAGES_QUERY, PAGE_BY_PATH_QUERY } from './queries/page'
import {
  PageByPathQuery,
  PageByPathQueryVariables,
  PagesQuery,
} from '@/generated/graphql'

export class PageAPI {
  static async getAll() {
    const data = await client.request<PagesQuery>(PAGES_QUERY)
    return data.pages
  }

  static async get(path: string) {
    const data = await client.request<
      PageByPathQuery,
      PageByPathQueryVariables
    >(PAGE_BY_PATH_QUERY, { path })

    return {
      // FIXME: ??
      page: data.pages[0] || null,
    }
  }
}
