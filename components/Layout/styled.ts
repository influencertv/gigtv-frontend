import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { MdMenu, MdClose } from 'react-icons/md'

import { titleLink } from '@/global-styled/helpers'
import { mediaQueries } from '@/global-styled/media'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.colors.primary};

  @media (min-width: 800px) {
    padding-left: 4%;
    padding-right: 4%;
  }
`

export const Menu = styled(MdMenu)`
  margin-right: 10px;
  cursor: pointer;
`

export const Navigation = styled.ul``

export const NavItem = styled.li`
  padding-right: 18px;

  a {
    color: ${props => props.theme.fontColors.grey};
    font-weight: 600;
    text-transform: capitalize;
    transition: 200ms color ease-in-out;
    &:hover {
      color: #fff;
    }
  }
`

export const Logo = styled.div`
  flex: 1;
  text-align: center;
  img {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 270px;
  }
`

export const HeaderButton = styled.button<{ active?: boolean }>`
  color: #fff;
  background-color: transparent;
  outline: none;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 8px 18px;
  transition: all 0.2s;
  font-weight: bold;
  margin-left: 18px;

  ${props =>
    props.active &&
    css`
      color: ${props.theme.colors.primary};
      background-color: #fff;
    `}

  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: #fff;
  }
`

// Page Content Wrapper
export const MainContainer = styled.main`
  margin-top: 60px;
  ${mediaQueries.isNotDesktop} {
    margin-top: ${props => props.theme.dynamic.headerHeight}px;
  }
  flex: 1;
`

export const Footer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.fontColors.contrast};
  padding-top: 50px;
  padding-bottom: 50px;

  > * {
    max-width: ${'1250px'};
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;

  ${mediaQueries.isNotDesktop} {
    flex-direction: column;
    > *:last-child {
      margin-top: 30px;
    }
  }
`

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 16px;
    color: #fff;
    padding-right: 10px;
    border-right: 1px solid rgba(200, 200, 200, 0.4);
    ${mediaQueries.isNotDesktop} {
      font-size: 14px;
    }
  }

  svg {
    margin-left: 10px;
  }
`

export const FooterLinks = styled.div`
  border-top: 1px solid rgba(200, 200, 200, 0.4);
  padding-top: 15px;
  margin-top: 20px;
  padding-bottom: 10px;
  text-align: center;
`

export const FooterLink = styled.span`
  ${titleLink}
  margin-left: 5px;
  margin-right: 5px;
`

export const FooterLegal = styled.div`
  ${mediaQueries.isNotDesktop} {
    text-align: center;
  }
`

export const DownloadIcons = styled.div`
  img {
    background-color: white;
    border-radius: 10px;
    height: 40px;
    margin-left: 20px;
  }
`

export const MobileMenuWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: ${() =>
    globalThis.document
      ? `${globalThis.document.body.clientHeight}px`
      : '100vh'};
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`

export const MobileMenu = styled.div`
  position: relative;
  background-color: #fff;
  padding-top: 20px;
  padding-left: 15px;
  width: 95%;
  max-width: 400px;
  border-bottom-right-radius: 100px;
`

export const MobileNavigationItem = styled.div`
  font-weight: bold;
  padding-bottom: 20px;
  ${titleLink}
`

export const CloseButton = styled(MdClose)`
  position: absolute;
  top: 16px;
  right: 40px;
  cursor: pointer;
`
