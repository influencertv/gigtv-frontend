import YoutubePlayer from 'react-player/youtube'

import TVAside from './TVAside'
import * as S from './styled'
import { useQuery } from 'react-query'
import client from '@/lib/api/graphql-client'
import { LIVE_TV_QUERY } from '@/lib/api/queries/liveTV'
import { LiveTvQuery } from '@/generated/graphql'

const fetcher = () => client.request<LiveTvQuery>(LIVE_TV_QUERY)

const LiveTV = () => {
  const { data, error } = useQuery('live-tv', fetcher)

  if (!data) {
    return null
  }

  if (error) {
    return null
  }

  return (
    <>
      <S.Wrapper>
        <S.TV>
          <S.PlayerWrapper>
            <S.Player id="videoPlayer">
              <YoutubePlayer
                url={`https://www.youtube.com/watch?v=${data.liveTv.liveNow.youtubeVideoId}`}
              />
            </S.Player>
          </S.PlayerWrapper>

          <TVAside liveNow={data.liveTv.liveNow} upNext={data.liveTv.upNext} />
        </S.TV>
      </S.Wrapper>
    </>
  )
}

export default LiveTV
