import YoutubePlayer from 'react-player/youtube'
import Head from 'next/head'

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
      <Head>
        <script
          src={`https://player.dacast.com/js/player.js?contentId=${data.liveTv.liveNow.videoId}`}
        ></script>
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
            setTimeout(function() {
              var CONTENT_ID = "${data.liveTv.liveNow.videoId}"
              var myPlayer = dacast(CONTENT_ID, 'videoPlayer');
            }, 1000)
          `,
          }}
        ></script>
      </Head>
      <S.Wrapper>
        <S.TV>
          <S.PlayerWrapper>
            {data.liveTv.liveNow.youtubeVideoId ? (
              <S.Player id="videoPlayer">
                <YoutubePlayer
                  url={`https://www.youtube.com/watch?v=${data.liveTv.liveNow.youtubeVideoId}`}
                />
              </S.Player>
            ) : (
              <S.Player id="videoPlayer"></S.Player>
            )}
          </S.PlayerWrapper>

          <TVAside liveNow={data.liveTv.liveNow} upNext={data.liveTv.upNext} />
        </S.TV>
      </S.Wrapper>
    </>
  )
}

export default LiveTV
