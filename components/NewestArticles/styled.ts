import styled from '@emotion/styled'

import { container, titleLink } from '@/global-styled/helpers'
import { mediaQueries } from '@/global-styled/media'

export const Wrapper = styled.section`
  ${container}
  display: flex;
  margin-bottom: 30px;

  ${mediaQueries.isNotDesktop} {
    flex-direction: column;
  }
`

export const Article = styled.article`
  flex: 1;
  margin-right: 30px;

  h4 {
    ${titleLink}
  }

  &:last-child {
    margin-right: 0;
  }

  h5 {
    ${titleLink}
    margin-bottom: 7px;
  }

  p {
    margin-top: 10px;
    margin-bottom: 5px;
  }

  ${mediaQueries.isNotDesktop} {
    margin-bottom: 50px;
    margin-right: 0;
  }
`

export const PostedAtAndBy = styled.span`
  font-size: 0.9em;
  line-height: 1;
  color: #999;
  span {
    text-decoration: underline;
  }
`
