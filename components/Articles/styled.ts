import styled from '@emotion/styled'

import { titleLink } from '@/global-styled/helpers'

export const Wrapper = styled.div``

export const ArticleCard = styled.article`
  display: flex;
  padding-bottom: 40px;
  padding-top: 40px;
  border-bottom: 1px solid #d5d5d5;
  max-width: 610px;
  justify-content: space-between;
`

export const ArticleCardTitle = styled.h4`
  ${titleLink}
  margin-right: 10px;
  max-width: 400px;
  font-size: 20px;
`

export const ArticleCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const PostedAtAndBy = styled.div``
