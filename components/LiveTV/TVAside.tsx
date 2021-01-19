import { useState } from 'react'
import { FaChevronRight, FaPlay } from 'react-icons/fa'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

import * as S from './styled'
import { LiveTvQuery } from 'generated/graphql'
import { API_URL } from '@/config'
import { useQuery } from 'react-query'

type Props = {
  liveNow: LiveTvQuery['liveTv']['liveNow']
  upNext: LiveTvQuery['liveTv']['upNext']
}

const url = `${API_URL}/upload/files?mime=video/mp4`
const fetcher = () => fetch(url).then(res => res.json())

const TVAside: React.FC<Props> = ({ liveNow, upNext }) => {
  const [currentTab, setCurrentTab] = useState<0 | 1>(1)
  const { data: videos } = useQuery('uploaded-videos', fetcher)

  console.log({ videos })

  const tabs = [
    <div key={0}>
      {videos &&
        videos.map(video => (
          <S.VideoCard key={video.id}>
            <div>
              <S.VideoCardTime>
                <FaPlay color="white" />
              </S.VideoCardTime>
              <S.VideoCardTitle>{video.caption}</S.VideoCardTitle>
            </div>
            <S.VideoCardThumbnail
              src={video.previewUrl}
              width={110}
              height={56}
            />
          </S.VideoCard>
        ))}
    </div>,
    <div key={1}>
      <S.LiveNow>LIVE NOW</S.LiveNow>
      <S.LiveNowContent>
        <h4>{liveNow.title}</h4>
        <p>{liveNow.description}</p>
      </S.LiveNowContent>
      {upNext &&
        upNext.map((item, index) => (
          <div key={item.id}>
            {index === 0 ? <S.UpNext>UP NEXT</S.UpNext> : null}
            <S.UpNextTime style={index > 0 ? { marginTop: '15px' } : null}>
              {differenceInCalendarDays(new Date(item.datetime), Date.now())}
            </S.UpNextTime>
            <S.UpNextTitle>{item.title}</S.UpNextTitle>
          </div>
        ))}
      <S.Button>
        <span>SEE FULL SCHEDULE</span> <FaChevronRight />
      </S.Button>
    </div>,
  ]

  return (
    <S.AsideWrapper>
      <S.Tabs>
        <S.Tab current={currentTab === 0} onClick={() => setCurrentTab(0)}>
          For you
        </S.Tab>
        <S.Tab current={currentTab === 1} onClick={() => setCurrentTab(1)}>
          Live TV
        </S.Tab>
      </S.Tabs>
      {tabs[currentTab]}
    </S.AsideWrapper>
  )
}

export default TVAside
