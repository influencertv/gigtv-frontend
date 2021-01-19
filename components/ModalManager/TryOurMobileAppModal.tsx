import Image from 'next/image'

import { SiteType } from '@/lib/api/types'
import * as S from './styled'

type Props = {
  os: 'iOS' | 'Android'
  mobileAppLinks: SiteType['mobileAppLinks']
}

const TryOurMobileAppModal: React.FC<Props> = ({ os, mobileAppLinks }) => {
  return (
    <S.TryOurMobileAppWrapper>
      <h1>Hey, there!</h1>
      <h2>
        Try our mobile app available at&nbsp;
        {os === 'iOS' ? 'App Store' : 'Google Play'}:
      </h2>
      <a
        href={
          os === 'iOS' ? mobileAppLinks.appStore : mobileAppLinks.googlePlay
        }
      >
        <img alt="" />
        <Image
          src={
            os === 'iOS'
              ? '/assets/icons/app-store-download.svg'
              : '/assets/icons/google-play-download.svg'
          }
          layout="fixed"
          width={216}
          height={64}
        />
      </a>
    </S.TryOurMobileAppWrapper>
  )
}

export default TryOurMobileAppModal
