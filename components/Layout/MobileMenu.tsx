import Link from 'next/link'

import { useClickedOutside } from '@/lib/hooks/hooks'
import { useSiteData } from '@/lib/hooks/api-hooks'
import * as S from './styled'

type Props = {
  setIsOpened: (value: boolean) => void
}

const MobileMenu: React.FC<Props> = ({ setIsOpened }) => {
  const { clickedOutside, setElementRef } = useClickedOutside()
  const { data } = useSiteData()

  if (clickedOutside) {
    setIsOpened(false)
  }

  const navigation = data?.siteNavigation || []

  return (
    <S.MobileMenuWrapper>
      <S.MobileMenu ref={setElementRef()}>
        <S.CloseButton
          color="#000"
          size={28}
          onClick={() => setIsOpened(false)}
        />
        {navigation.map(item => (
          <Link href={item.link} key={item.id}>
            <a>
              <S.MobileNavigationItem>{item.text}</S.MobileNavigationItem>
            </a>
          </Link>
        ))}
      </S.MobileMenu>
    </S.MobileMenuWrapper>
  )
}

export default MobileMenu
