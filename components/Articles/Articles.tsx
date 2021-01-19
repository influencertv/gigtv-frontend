import * as S from './styled'
import { CategoryType } from '@/lib/api/types'
import ArticleCard from './ArticleCard'

type Props = {
  articles: CategoryType['articles']
}

const Articles: React.FC<Props> = ({ articles }) => {
  return (
    <S.Wrapper>
      {articles.map(article => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </S.Wrapper>
  )
}

export default Articles
