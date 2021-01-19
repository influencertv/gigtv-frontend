import styled from '@emotion/styled'

import { titleLink } from '@/global-styled/helpers'

export const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-left: 30px;
`

export const SectionTitle = styled.h3`
  margin-bottom: 10px;
`

export const Opinions = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  background-color: #fff;
`

export const OpinionWrapper = styled.div`
  max-width: 250px;
  padding: 10px 15px;
`

export const OpinionTitle = styled.h4`
  ${titleLink}
`
