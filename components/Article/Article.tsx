import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import format from 'date-fns/format'
import useMedia from 'use-media'

import { DESKTOP_VIEW } from '@/config'
import Markdown from '@/components/Markdown/Markdown'
import ShareBox from '@/components/ShareBox/ShareBox'
import CommentSection from '@/components/CommentSection/CommentSection'
import * as S from './styled'

type Props = {
  title: string
  content: string
  posted_at: string
}

const Article: React.FC<Props> = ({ title, content, posted_at }) => {
  const isDesktop = useMedia({ minWidth: DESKTOP_VIEW })
  const [url, setUrl] = useState(null)
  const router = useRouter()
  useEffect(() => {
    setUrl(document.location.href)
  }, [])

  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <S.Content>
        {isDesktop && url && <ShareBox title={title} url={url} />}
        <Markdown source={content} />
      </S.Content>
      <S.PostedAt>{format(new Date(posted_at), 'MMM do yyyy')}</S.PostedAt>
      {isDesktop || (url && <ShareBox title={title} url={url} />)}
      <CommentSection articleId={router.query.id as string} />
    </S.Wrapper>
  )
}

export default Article
