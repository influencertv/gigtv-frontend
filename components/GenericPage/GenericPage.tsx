import Markdown from '@/components/Markdown/Markdown'
import * as S from './styled'

type Props = {
  title: string
  content: string
}

const GenericPage: React.FC<Props> = ({ title, content }) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <Markdown source={content} />
    </S.Wrapper>
  )
}

export default GenericPage
