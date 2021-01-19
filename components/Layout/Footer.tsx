import Link from 'next/link'
import Image from 'next/image'
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

import { useSiteData } from '@/lib/hooks/api-hooks'
import * as S from './styled'

const Footer: React.FC = () => {
  const { data } = useSiteData()

  const socialMedia = data?.socialMedia
  const footerLinks = data?.footerLinks || []
  const mobileAppLinks = data?.mobileAppLinks

  return (
    <S.Footer>
      <S.FooterTop>
        {socialMedia && (
          <S.FooterSocial>
            <h3>FOLLOW US ON</h3>
            <a href={socialMedia.facebook}>
              <AiOutlineFacebook size={28} color="#fff" />
            </a>
            <a href={socialMedia.twitter}>
              <AiOutlineTwitter size={28} color="#fff" />
            </a>
            <a href={socialMedia.instagram}>
              <AiOutlineInstagram size={28} color="#fff" />
            </a>
            <a href={socialMedia.whatsapp}>
              <FaWhatsapp size={28} color="#fff" />
            </a>
            <a href={socialMedia.kingschat} style={{ marginLeft: '10px' }}>
              <Image
                src="/assets/icons/kingschat.png"
                layout="fixed"
                width={24}
                height={24}
              />
            </a>
          </S.FooterSocial>
        )}
        {mobileAppLinks && (
          <S.DownloadIcons>
            <a href={mobileAppLinks.appStore}>
              <Image
                src="/assets/icons/app-store-download.svg"
                layout="fixed"
                width={216}
                height={64}
              />
            </a>
            <a href={mobileAppLinks.googlePlay}>
              <Image
                src="/assets/icons/google-play-download.svg"
                layout="fixed"
                width={216}
                height={64}
              />
            </a>
          </S.DownloadIcons>
        )}
      </S.FooterTop>
      {footerLinks && (
        <S.FooterLinks>
          {footerLinks.map(item => (
            <Link href={item.link} key={item.id}>
              <a>
                <S.FooterLink>{item.text}</S.FooterLink>
              </a>
            </Link>
          ))}
        </S.FooterLinks>
      )}
      <S.FooterLegal>&copy; GigTV - All right reserved</S.FooterLegal>
    </S.Footer>
  )
}

export default Footer
