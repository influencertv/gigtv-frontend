import { gql } from 'graphql-request'

export const SITE_QUERY = gql`
  query Site {
    site {
      logo {
        url
        alternativeText
      }
      siteNavigation {
        id
        text
        link
      }
      quickLinks {
        id
        text
        link
      }
      footerLinks {
        id
        text
        link
      }
      socialMedia {
        facebook
        twitter
        instagram
        whatsapp
        kingschat
      }
      mobileAppLinks {
        appStore
        googlePlay
      }
    }
  }
`
