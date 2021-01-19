import Link from 'next/link'

import * as S from './styled'
import { ArticlesType } from '@/lib/api/types'

type Props = {
  articles: ArticlesType
}

const Opinions: React.FC<Props> = ({ articles }) => {
  return (
    <S.Wrapper>
      <div>
        <S.SectionTitle>Opinions</S.SectionTitle>
        <S.Opinions>
          {articles.map(article => (
            <S.OpinionWrapper key={article.id}>
              <Link href={`/article/${article.id}`}>
                <a>
                  <S.OpinionTitle>{article.title}</S.OpinionTitle>
                </a>
              </Link>
            </S.OpinionWrapper>
          ))}
        </S.Opinions>
      </div>
    </S.Wrapper>
  )
}

export default Opinions
