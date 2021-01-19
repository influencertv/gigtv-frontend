import client from './graphql-client'
import { COMMENTS_BY_ARTICLE_ID_QUERY } from './queries/comment'
import {
  CommentsByArticleIdQuery,
  CommentsByArticleIdQueryVariables,
} from '@/generated/graphql'

export class CommentAPI {
  static async getAll(articleId: string) {
    const data = client.request<
      CommentsByArticleIdQuery,
      CommentsByArticleIdQueryVariables
    >(COMMENTS_BY_ARTICLE_ID_QUERY, { id: articleId })

    return data
  }
}
