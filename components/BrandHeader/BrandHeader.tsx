import Link from 'next/link'

import { useSiteData } from '@/lib/hooks/api-hooks'
import * as S from './styled'

const BrandHeader: React.FC = () => {
  const { data } = useSiteData()
  const quickLinks = data?.quickLinks || []

  return (
    <S.Wrapper>
      <S.Title>InfluencerTV</S.Title>
      {quickLinks && (
        <S.QuickLinks>
          <S.QuickListTitle>Quick links:</S.QuickListTitle>
          <div>
            {quickLinks.map(item => (
              <Link href={item.link} key={item.id}>
                <a>
                  <S.QuickLink>{item.text}</S.QuickLink>
                </a>
              </Link>
            ))}
          </div>
        </S.QuickLinks>
      )}
    </S.Wrapper>
  )
}

export default BrandHeader
