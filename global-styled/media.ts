import { DESKTOP_VIEW, MOBILE_VIEW } from '@/config'

export const mediaQueries = {
  isDesktop: `@media (min-width: ${DESKTOP_VIEW}px)`,
  isNotDesktop: `@media (max-width: ${DESKTOP_VIEW}px)`,

  isMobile: `@media (max-width: ${MOBILE_VIEW}px)`,
}
