import styled from '@emotion/styled'

import { titleLink } from '@/global-styled/helpers'
import { mediaQueries } from '@/global-styled/media'

export const Wrapper = styled.div`
  ${mediaQueries.isNotDesktop} {
    margin-top: 10px;
    margin-bottom: 30px;
  }
`

export const Title = styled.h3`
  margin-bottom: 5px;
`

export const Share = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  a {
    ${titleLink}
  }
`
