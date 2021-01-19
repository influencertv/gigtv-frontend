import styled from '@emotion/styled'

import { container } from '@/global-styled/helpers'

export const Wrapper = styled.div`
  ${container}
  margin-top: calc(
    40px +
      ${props =>
    props.theme.dynamic.bannerDisplayed ? props.theme.bannerHeight : '10px'}
  );
`

export const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 25px;
  text-align: center;
`
