import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'

import { useClickedOutside } from '@/lib/hooks/hooks'
import * as S from './styled'

type Props = {
  opened: boolean
  setOpened: (value: boolean) => void
}

type Inputs = {
  searchQuery: string
}

const SearchBox: React.FC<Props> = ({ opened, setOpened }) => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<Inputs>()
  const { setElementRef, clickedOutside } = useClickedOutside()

  const onSubmit = handleSubmit(({ searchQuery }) => {
    router.push(`/search?query=${searchQuery}`)
  })

  if (clickedOutside && opened) {
    setOpened(false)
  }

  return (
    <S.Wrapper ref={setElementRef()} onSubmit={onSubmit}>
      <S.Input
        ref={register}
        name="searchQuery"
        autoComplete="off"
        opened={opened}
      />
      <S.Search opened={opened} onClick={() => setOpened(!opened)}>
        <FaSearch />
      </S.Search>
    </S.Wrapper>
  )
}

export default SearchBox
