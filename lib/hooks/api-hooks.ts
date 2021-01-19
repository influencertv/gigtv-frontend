import { useQuery } from 'react-query'

import { API } from '@/lib/api/api'
import { ArticleAPI } from '@/lib/api/article-api'
import { CommentAPI } from '@/lib/api/comment-api'
import { CategoryAPI } from '@/lib/api/category-api'
import { PageAPI } from '@/lib/api/page-api'

export const SITE_DATA_KEY = 'site-data'

export function useSiteData() {
  return useQuery(SITE_DATA_KEY, APIS[SITE_DATA_KEY])
}

export const ARTICLES_KEY = 'articles'

export function useArticles() {
  throw new Error('unimplemented')
}

export const ARTICLE_KEY = 'article'

export function useArticle(articleId: string) {
  return useQuery([ARTICLE_KEY, articleId], () => ArticleAPI.getOne(articleId))
}

export const COMMENTS_KEY = 'comments'

export function useComments(articleId: string) {
  return useQuery([COMMENTS_KEY, { articleId }], () =>
    CommentAPI.getAll(articleId)
  )
}

export const CATEGORY_KEY = 'category'

export function useCategory(categoryId: string, limit = 100) {
  return useQuery([CATEGORY_KEY, categoryId], () =>
    CategoryAPI.getOne(categoryId, limit)
  )
}

export const CATEGORY_IDS_KEY = 'category-ids'

export function useCategoryIds() {
  return useQuery(CATEGORY_IDS_KEY, CategoryAPI.getIds)
}

export const PAGE_KEY = 'page'

export function usePage(path: string) {
  return useQuery([PAGE_KEY, path], () => PageAPI.get(path))
}

export const APIS = {
  [SITE_DATA_KEY]: API.getSiteData,
}
