import { AppProps } from 'next/app'
import { Global, ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'

import { theme, globalStyles } from '@/global-styled'
import AuthProvider from '@/lib/context/auth/AuthProvider'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AuthProvider>
          <ThemeProvider
            theme={{
              ...theme,
              dynamic: {
                ...theme.dynamic,
                bannerDisplayed: canDisplayDesktopNotificationsBanner(),
                headerHeight: canDisplayDesktopNotificationsBanner() ? 95 : 60,
              },
            }}
          >
            <Global styles={globalStyles} />
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </ThemeProvider>
        </AuthProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

function canDisplayDesktopNotificationsBanner() {
  if (!process.browser) {
    return false
  }
  if (+localStorage.getItem('@dont-show-notification-banner') === 1) {
    return false
  }
  if (Notification.permission !== 'default') {
    return false
  }
  return true
}

export default App
