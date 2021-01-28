import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { mediaQueries } from '@/global-styled/media'

export const Wrapper = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px);
  background-color: ${props => props.theme.colors.primary};
  border-top: 1px dotted #fff;
  display: flex;
  align-items: center;

  ${mediaQueries.isNotDesktop} {
    align-items: flex-start;
  }
`

export const PlayerWrapper = styled.div`
  margin-right: 30px;
  width: 70%;
  border: 1px dotted #fff;
  color: #fff;

  > *:first-of-type {
    border-bottom: 1px dotted #fff;
    margin-bottom: 1px;
  }

  ${mediaQueries.isNotDesktop} {
    width: 100%;
  }
`

export const Player = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 0;

  ${mediaQueries.isMobile} {
    height: 35vh;
    margin-top: 52px;
  }
`

export const TV = styled.div`
  width: 90vw;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-bottom: 60px;

  ${mediaQueries.isNotDesktop} {
    width: 100%;
    flex-direction: column;
  }
`

export const AsideWrapper = styled.aside`
  min-width: 25vw;
  border: 1px dotted #fff;
  box-sizing: content-box;
`

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px dotted #fff;
`

type TabProps = {
  current?: boolean
}

export const Tab = styled.div<TabProps>`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.2s;
  text-align: center;
  ${props =>
    props.current &&
    css`
      color: #fff;
      font-weight: bold;
    `};
`

export const LiveNow = styled.div`
  color: #fff;
  font-weight: bold;
  padding-left: 10px;
  display: flex;
  align-items: center;
  margin-top: 15px;

  &::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: #ff433d;
    border-radius: 50%;
    margin-right: 7px;
  }
`

export const LiveNowContent = styled.div`
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  h4 {
    color: #fff;
  }
  p {
    color: #fff;
    max-width: 90%;
  }
  padding-bottom: 15px;
  border-bottom: 1px dotted #fff;
`

export const UpNext = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding-left: 10px;
  padding-top: 10px;
`

export const UpNextTime = styled.div`
  color: #fff;
  font-size: 14px;
  margin-left: 10px;
  margin-top: 8px;
  margin-bottom: 5px;
`

export const UpNextTitle = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding-left: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dotted #fff;
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  color: #ccc;
  font-weight: bold;
  font-size: 13px;
  margin-left: 10px;
  margin-top: 15px;
  transition: all 0.3s;

  &:hover {
    color: #fff;
  }

  svg {
    margin-left: 10px;
  }
`

export const VideoCard = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted #fff;
  padding: 10px 20px;
`

export const VideoCardTime = styled.h6`
  color: #fff;
  margin-top: 5px;
  margin-bottom: 3px;
`

export const VideoCardTitle = styled.h5`
  color: #fff;
`

export const VideoCardThumbnail = styled.img`
  margin-left: 10px;
  margin-right: 10px;
`
