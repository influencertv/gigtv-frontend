import Link from 'next/link'
import Image from 'next/image'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { CategoryType } from '@/lib/api/types'
import { getImageUrl } from '@/lib/utils'
import * as S from './styled'

type Props = {
  article: CategoryType['articles'][0]
}

const ArticleCard: React.FC<Props> = ({ article }) => {
  const timeAgo = `posted ${formatDistanceToNow(
    new Date(article.posted_at)
  )} ago`

  return (
    <S.ArticleCard>
      <S.ArticleCardContent>
        <Link href={`/article/${article.id}`}>
          <a>
            <S.ArticleCardTitle>{article.title}</S.ArticleCardTitle>
          </a>
        </Link>
        <S.PostedAtAndBy>{timeAgo}</S.PostedAtAndBy>
      </S.ArticleCardContent>
      {article.image && (
        <Link href={`/article/${article.id}`}>
          <a>
            <Image
              src={getImageUrl(article.image.url)}
              alt={article.image.alternativeText}
              width={200}
              height={140}
            />
          </a>
        </Link>
      )}
    </S.ArticleCard>
  )
}

export default ArticleCard
