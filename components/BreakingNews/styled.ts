import styled from '@emotion/styled'

import { container } from '@/global-styled/helpers'
import { mediaQueries } from '@/global-styled/media'

export const Wrapper = styled.div`
  ${container}
  border: 1px solid #000;

  > div {
    min-height: 25px;
  }
  background-color: #fff;

  ${mediaQueries.isNotDesktop} {
    width: 100%;
  }
`

export const Button = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.body};
  display: flex;
  align-items: center;
  height: 25px;
  width: 26px;
  padding-left: 5px;
  padding-right: 5px;
  border-right: 1px solid #000;
  z-index: 2;
  path {
    fill: ${props => props.theme.colors.primary};
  }

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    path {
      fill: #fff;
    }
  }
`
