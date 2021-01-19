import styled from '@emotion/styled'

import { titleLink } from '@/global-styled/helpers'
import { mediaQueries } from '@/global-styled/media'

export const Wrapper = styled.section`
  width: 90%;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  border-top: 2px solid ${props => props.theme.colors.primary};
  margin-bottom: 60px;
`

export const ContentWrapper = styled.div`
  display: flex;
  ${mediaQueries.isDesktop} {
    > *:first-of-type {
      width: 65%;
    }
  }

  ${mediaQueries.isNotDesktop} {
    flex-direction: column;
  }
`

export const CategoryName = styled.h3`
  ${titleLink}
  font-size: 1.3rem;
  text-transform: capitalize;
  margin-top: 18px;
  margin-bottom: 18px;
`

export const Featured = styled.div`
  flex: 50%;
  > *:first-of-type {
    margin-bottom: 15px;
  }

  h2 {
    ${titleLink}
    margin-bottom: 15px;
    max-width: 35vw;
  }

  p {
    max-width: 35vw;
  }

  ${mediaQueries.isNotDesktop} {
    flex: initial;
    h2,
    p {
      max-width: 100vw;
    }
  }
`

export const TheLatest = styled.div`
  flex-basis: 50%;
  border-left: 1px solid rgba(100, 100, 100, 0.2);
  margin-left: 20px;
  padding-left: 25px;
  > *:first-of-type {
    margin-bottom: 12px;
  }

  ${mediaQueries.isNotDesktop} {
    flex: initial;
    border: 0;
    padding-left: 0;
    margin-left: 0;
    > *:first-of-type {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
`

export const LatestArticle = styled.div`
  display: flex;
  height: 120px;
  margin-bottom: 20px;

  > *:first-of-type {
    margin-right: 10px !important;
  }

  img {
    object-position: center;
    object-fit: cover;
  }

  h4 {
    ${titleLink}
    margin-bottom: 5px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  ${mediaQueries.isNotDesktop} {
    margin-bottom: 80px;
  }
`

export const ReadMore = styled.div`
  color: ${props => props.theme.colors.danger};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  margin-right: 20px;
  width: 100%;
  text-align: right;

  ${mediaQueries.isNotDesktop} {
    display: none;
  }
`
