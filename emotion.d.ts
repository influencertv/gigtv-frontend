import '@emotion/react'
import { theme } from './global-styled'

type CustomTheme = typeof theme

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
