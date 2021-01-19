import styled from '@emotion/styled'

import { container } from '@/global-styled/helpers'
import { mediaQueries } from '@/global-styled/media'

export const Wrapper = styled.div`
  ${container}
`

export const Top = styled.div`
  display: flex;

  > *:first-of-type {
    flex: 1;
  }
`

export const Article = styled.article`
  display: flex;
  align-items: center;
  margin-bottom: 70px;
  min-height: 570px;

  > *:first-of-type {
    margin-right: 30px;
  }

  > * {
    flex: 1;
  }

  ${mediaQueries.isNotDesktop} {
    flex-direction: column;
    > *:first-of-type {
      margin-right: 0;
    }
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.25;
  margin-bottom: 15px;

  &:hover {
    text-decoration: underline;
  }

  ${mediaQueries.isNotDesktop} {
    font-size: 2rem;
  }
`
