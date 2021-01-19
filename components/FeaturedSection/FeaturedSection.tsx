import { useQuery } from 'react-query'
import useMedia from 'use-media'

import { DESKTOP_VIEW } from '@/config'
import NewestArticles from '@/components/NewestArticles/NewestArticles'
import Opinions from '@/components/Opinions/Opinions'
import FeaturedArticleCard from '@/components/FeaturedSection/FeaturedArticleCard'
import { ArticleAPI } from '@/lib/api/article-api'
import * as S from './styled'

const FeaturedSection: React.FC = () => {
  const isDesktop = useMedia({ minWidth: DESKTOP_VIEW })
  const { data: articles, isSuccess: isSuccessFeatured } = useQuery(
    'featured-articles',
    ArticleAPI.getFeatured
  )
  const { data: opinions, isSuccess: isSuccessOpinions } = useQuery(
    'latest-opinions',
    ArticleAPI.getLatestOpinions
  )
  const { data: latestArticles, isSuccess: isSuccessLatest } = useQuery(
    ['latest-articles', 5],
    () => ArticleAPI.getAll({ limit: 5 })
  )

  return (
    <S.Wrapper>
      <S.Top>
        {isSuccessFeatured && <FeaturedArticleCard articles={articles} />}
        {isDesktop && isSuccessOpinions && <Opinions articles={opinions} />}
      </S.Top>
      {isSuccessLatest && <NewestArticles articles={latestArticles} />}
    </S.Wrapper>
  )
}

export default FeaturedSection
