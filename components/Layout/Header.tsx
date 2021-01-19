import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useMedia from 'use-media'
import { BsFillPersonFill } from 'react-icons/bs'

import { DESKTOP_VIEW } from '@/config'
import { useSignin } from '@/lib/hooks/hooks'
import { useSiteData } from '@/lib/hooks/api-hooks'
import DesktopNotifications from '@/components/DesktopNotifications/DesktopNotifications'
import SearchBox from '@/components/SearchBox/SearchBox'
import MobileMenu from './MobileMenu'
import * as S from './styled'

type Props = {
  isProfileModalOpened: boolean
  setIsProfileModalOpened: (value: boolean) => void
}

const Header: React.FC<Props> = ({
  isProfileModalOpened,
  setIsProfileModalOpened,
}) => {
  const { data } = useSiteData()
  const isDesktop = useMedia({ minWidth: DESKTOP_VIEW })
  const [isSearchBoxOpened, setIsSearchBoxOpened] = useState(false)
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const { isAuthenticated, signout } = useSignin()
  const router = useRouter()

  const navigation = data?.siteNavigation || []

  return (
    <>
      <S.HeaderWrapper>
        {isDesktop && <DesktopNotifications />}
        <S.Header>
          {isDesktop || (
            <S.Menu
              color="#fff"
              size={28}
              onClick={() => setIsMenuOpened(true)}
            />
          )}
          <SearchBox
            opened={isSearchBoxOpened}
            setOpened={setIsSearchBoxOpened}
          />
          {isDesktop && (
            <S.Navigation>
              {navigation.map(({ id, text, link }) => {
                return (
                  <S.NavItem key={id}>
                    <Link href={link}>
                      <a>{text}</a>
                    </Link>
                  </S.NavItem>
                )
              })}
            </S.Navigation>
          )}
          {(!isDesktop && isSearchBoxOpened) || <S.Logo></S.Logo>}
          {isDesktop ? (
            <div>
              {isAuthenticated ? (
                <S.HeaderButton onClick={signout}>Log out</S.HeaderButton>
              ) : (
                <>
                  <Link href="/signin">
                    <S.HeaderButton active={router.pathname === '/signin'}>
                      Sign In
                    </S.HeaderButton>
                  </Link>
                  <Link href="/signup">
                    <S.HeaderButton active={router.pathname === '/signup'}>
                      Sign Up
                    </S.HeaderButton>
                  </Link>
                </>
              )}
            </div>
          ) : (
            <BsFillPersonFill
              color="#fff"
              size={28}
              onClick={() => setIsProfileModalOpened(!isProfileModalOpened)}
            />
          )}
        </S.Header>
      </S.HeaderWrapper>
      {isMenuOpened && <MobileMenu setIsOpened={setIsMenuOpened} />}
    </>
  )
}

export default Header
