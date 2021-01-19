import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'

import SearchInput from '@/components/SearchInput/SearchInput'
import SearchHit from '@/components/SearchHit/SearchHit'
import client from '@/lib/api/graphql-client'
import { ARTICLE_SEARCH_QUERY } from '@/lib/api/queries/search'
import {
  ArticleSearchQuery,
  ArticleSearchQueryVariables,
} from '@/generated/graphql'

import * as S from './styled'

type Inputs = {
  searchQuery: string
}

const Search = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState(router.query.query as string)
  const { register, handleSubmit, setValue } = useForm<Inputs>()
  useEffect(() => {
    setValue('searchQuery', router.query.query as string)
    setSearchQuery(router.query.query as string)
  }, [router.query.query])

  const { data, isSuccess } = useQuery(['search', searchQuery], () =>
    client.request<ArticleSearchQuery, ArticleSearchQueryVariables>(
      ARTICLE_SEARCH_QUERY,
      { searchQuery }
    )
  )

  const onSubmit = handleSubmit(({ searchQuery }) => {
    setSearchQuery(searchQuery)
  })

  return (
    <S.Wrapper>
      <SearchInput ref={register} name="searchQuery" onSubmit={onSubmit} />
      <S.Hits>
        {isSuccess &&
          data.articles.map(article => (
            <Link href={`/article/${article.id}`} key={article.id}>
              <a>
                <SearchHit
                  title={article.title}
                  posted_at={article.posted_at}
                  key={article.id}
                />
              </a>
            </Link>
          ))}
      </S.Hits>
    </S.Wrapper>
  )
}

export default Search
