import { gql } from 'graphql-request'

export const LIVE_TV_QUERY = gql`
  query LiveTV {
    liveTv {
      liveNow {
        id
        title
        description
        videoId
      }
      upNext {
        id
        title
        description
        datetime
        duration
      }
      breakingNews {
        content
      }
    }
  }
`
