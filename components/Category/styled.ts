import styled from '@emotion/styled'

import { container, titleLink } from '@/global-styled/helpers'
import { mediaQueries } from '@/global-styled/media'

export const Wrapper = styled.section`
  ${container}
  padding-top: calc(15px + ${props =>
    props.theme.dynamic.bannerDisplayed ? props.theme.bannerHeight : '0px'});
`

export const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-top: 30px;
  margin-bottom: 40px;
  ${mediaQueries.isNotDesktop} {
    font-size: 2.5rem;
  }
`

export const Featured = styled.article`
  margin-bottom: 40px;
`

export const FeaturedTitle = styled.h3`
  ${titleLink}
  font-size: 2.3rem;
  max-width: 650px;
  margin-bottom: 20px;
  ${mediaQueries.isNotDesktop} {
    font-size: 2rem;
  }
`

export const FeaturedExcerpt = styled.p``
