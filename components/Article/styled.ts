import styled from '@emotion/styled'

import { container } from '@/global-styled/helpers'
import { mediaQueries } from '@/global-styled/media'

export const Wrapper = styled.article`
  ${container}
  padding-top: calc(40px + ${props =>
    props.theme.dynamic.bannerDisplayed ? props.theme.bannerHeight : '0px'});
  padding-bottom: 40px;

  h1:first-of-type {
    text-align: left;
    font-size: 3.5rem;
    line-height: 1.25;
    margin-bottom: 40px;
  }

  text-align: justify;
  line-height: 1.5;

  ${mediaQueries.isNotDesktop} {
    h1:first-of-type {
      font-size: 2.2rem;
    }
  }
`

export const Content = styled.div`
  display: flex;

  > *:last-child {
    flex: 1;
    ${mediaQueries.isDesktop} {
      padding-left: 40px;
    }
  }
`

export const PostedAt = styled.div`
  text-align: right;
  margin-top: 20px;
`
