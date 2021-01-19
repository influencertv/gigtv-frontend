import format from 'date-fns/format'

import * as S from './styled'

type Props = {
  title: string
  posted_at: string
}

const SearchHit: React.FC<Props> = ({ title, posted_at }) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Date> {format(new Date(posted_at), 'MMM do yyyy')}</S.Date>
    </S.Wrapper>
  )
}

export default SearchHit
