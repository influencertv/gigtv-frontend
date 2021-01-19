import { useState } from 'react'
import { useQuery } from 'react-query'
import { FaPlay, FaPause } from 'react-icons/fa'
import Ticker from 'react-ticker'

import { API } from '@/lib/api/api'
import { BreakingNewsQuery } from '@/generated/graphql'
import * as S from './styled'

const BreakingNews = () => {
  const [playing, setPlaying] = useState(true)
  const { data } = useQuery<BreakingNewsQuery>(
    'breaking-news',
    API.getBreakingNews
  )

  const news = data?.breakingNew?.text.map(item => item.content)

  return (
    <S.Wrapper>
      <S.Button onClick={() => setPlaying(!playing)}>
        {playing ? <FaPause /> : <FaPlay />}
      </S.Button>
      <div
        onMouseEnter={() => setPlaying(false)}
        onMouseLeave={() => setPlaying(true)}
      >
        <Ticker move={playing} speed={7}>
          {() =>
            news ? (
              <p style={{ whiteSpace: 'pre', fontSize: '18px' }}>
                {'   ' + news.join('   ')}
              </p>
            ) : (
              <p style={{ visibility: 'hidden' }}>Placeholder</p>
            )
          }
        </Ticker>
      </div>
    </S.Wrapper>
  )
}

export default BreakingNews
