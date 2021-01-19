import { useState } from 'react'
import Head from 'next/head'
import { ModalProvider } from 'react-modal-hook'

import ModalManager from '@/components/ModalManager/ModalManager'
import Footer from './Footer'
import Header from './Header'
import * as S from './styled'

export type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({ children, title }) => {
  const [isProfileModalOpened, setIsProfileModalOpened] = useState(false)

  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | LIVE TV, News, Entertainment + MORE`
            : 'LIVE TV, News, Entertainment + MORE'}
        </title>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N79QMXPHWH"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-N79QMXPHWH');
          `,
          }}
        ></script>
        <script
          data-ad-client="ca-pub-9598947394246056"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script> */}

        {/* Plausible script */}
        {/* <script
          async
          defer
          data-domain="influencertvs.com"
          src="https://analytics.influencertvs.com/js/plausible.js"
        ></script> */}
      </Head>

      <S.Wrapper>
        <Header
          isProfileModalOpened={isProfileModalOpened}
          setIsProfileModalOpened={setIsProfileModalOpened}
        />
        <S.MainContainer>{children}</S.MainContainer>
        <Footer />
      </S.Wrapper>

      <ModalProvider>
        <ModalManager isProfileModalOpened={isProfileModalOpened} />
      </ModalProvider>
    </>
  )
}

export default Layout
