import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

import * as S from './styled'

type Props = {
  title: string
  url: string
}

const ShareBox: React.FC<Props> = ({ title, url }) => {
  return (
    <S.Wrapper>
      <S.Title>Share this article</S.Title>
      <S.Share>
        <AiOutlineFacebook />
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
          Share
        </a>
      </S.Share>
      <S.Share>
        <AiOutlineTwitter />
        <a href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}>
          Tweet
        </a>
      </S.Share>
      <S.Share>
        <AiOutlineLinkedin />
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}
        >
          Post
        </a>
      </S.Share>
      <S.Share>
        <FaWhatsapp />
        <a
          href={`https://api.whatsapp.com/send?text=${url}`}
          data-action="share/whatsapp/share"
        >
          Share
        </a>
      </S.Share>
    </S.Wrapper>
  )
}

export default ShareBox
