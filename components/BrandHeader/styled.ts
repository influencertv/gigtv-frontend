import styled from '@emotion/styled'

import { mediaQueries } from '@/global-styled/media'

export const Wrapper = styled.div`
  margin-top: calc(
    40px +
      ${props =>
        props.theme.dynamic.bannerDisplayed ? props.theme.bannerHeight : '10px'}
  );
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const QuickLinks = styled.div`
  display: flex;

  ${mediaQueries.isNotDesktop} {
    flex-direction: column;
  }
`

export const QuickListTitle = styled.h4`
  margin-right: 10px;

  ${mediaQueries.isNotDesktop} {
    text-align: center;
    margin-bottom: 10px;
  }
`

export const QuickLink = styled.span`
  margin-left: 10px;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`

export const Title = styled.h1`
  margin-bottom: 20px;
`
