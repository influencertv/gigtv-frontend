import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FaSearch } from 'react-icons/fa'

import * as S from './styled'

type Props = {
  name: string
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
}

const SearchInput: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  props,
  ref
) => {
  return (
    <S.Wrapper onSubmit={props.onSubmit}>
      <S.SearchIconWrapper>
        <FaSearch />
      </S.SearchIconWrapper>
      <S.Input ref={ref} name={props.name} type="search" />
      <S.SearchButton type="submit">Search</S.SearchButton>
    </S.Wrapper>
  )
}

export default forwardRef(SearchInput)
