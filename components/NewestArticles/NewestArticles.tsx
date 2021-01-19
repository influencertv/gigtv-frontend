import Link from 'next/link'
import Image from 'next/image'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { getImageUrl } from '@/lib/utils'
import { ArticlesType } from '@/lib/api/types'
import * as S from './styled'

type Props = {
  articles: ArticlesType
}

const NewestArticles: React.FC<Props> = ({ articles }) => {
  return (
    <S.Wrapper>
      {articles.map(article => {
        const timeAgo = `posted ${formatDistanceToNow(
          new Date(article.updated_at)
        )} ago`

        return (
          <S.Article key={article.id}>
            {article.image && (
              <Image
                src={getImageUrl(article.image.url)}
                alt={article.image.alternativeText}
                width={article.image.width}
                height={article.image.height}
              />
            )}
            {article.category && (
              <Link href={`/category/${article.category.id}`}>
                <a>
                  <h5>{article.category.name}</h5>
                </a>
              </Link>
            )}
            <Link href={`/article/${article.id}`}>
              <a>
                <h4>{article.title}</h4>
              </a>
            </Link>
            <p>{article.excerpt}</p>
            <S.PostedAtAndBy>
              {timeAgo} <br />
              by <span>{article.author}</span>
            </S.PostedAtAndBy>
          </S.Article>
        )
      })}
    </S.Wrapper>
  )
}

export default NewestArticles
