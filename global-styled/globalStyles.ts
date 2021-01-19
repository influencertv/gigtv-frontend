import { css } from '@emotion/react'
import { Theme } from './theme'

export const globalStyles = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${theme.colors.body};
  }

  li {
    display: inline-block;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  body {
    font-family: 'Raleway', sans-serif;
    line-height: 1.4;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;
    color: #000;
  }
`
