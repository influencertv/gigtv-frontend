export const theme = {
  colors: {
    primary: '#0A0A0A',
    primaryLighter: '#1f1f1f',
    secondary: '#1854A5',
    secondaryLight: '#3D73D5',
    info: '#FFEDBF',
    danger: '#DA3C1F',
    body: '#F7F7F7',
  },
  fontColors: {
    grey: '#d5d5d5',
    darkGrey: '#666666',
    contrast: '#666',
  },
  dynamic: {
    bannerDisplayed: false,
    headerHeight: 60 + 35,
  },
  bannerHeight: '35px',
}

export const theme2: Theme = {
  colors: {
    primary: '#3f51b5',
    primaryLighter: '#4254b8',
    secondary: '#f44336',
    secondaryLight: '#3D73D5',
    info: '#FFEDBF',
    danger: '#DA3C1F',
    body: '#F7F7F7',
  },
  fontColors: {
    grey: '#d5d5d5',
    darkGrey: '#666666',
    contrast: '#fff',
  },
  dynamic: {
    bannerDisplayed: false,
    headerHeight: 60 + 35,
  },
  bannerHeight: '35px',
}

export type Theme = typeof theme
