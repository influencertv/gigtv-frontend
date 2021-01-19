import { useContext } from 'react';
import Link from 'next/link'

import * as S from './styled'

import { authContext } from '@/lib/context/auth/context'

const ProfileModal = () => {
  const context = useContext(authContext)

  return (
    <S.ProfileModalWrapper>
      {context.isLoggedIn ? (
        <S.Button onClick={context.logOutUser}>Log out</S.Button>
      ) : (
        <>
          <Link href="/signin">
            <a>
              <S.Button>Sign in</S.Button>
            </a>
          </Link>
          <Link href="/signup">
            <a>
              <S.Button>Sign up</S.Button>
            </a>
          </Link>
        </>
      )}
    </S.ProfileModalWrapper>
  )
}

export default ProfileModal
