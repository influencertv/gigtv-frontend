import client from './graphql-client'
import { SITE_QUERY } from './queries/site'
import { BREAKING_NEWS_QUERY } from './queries/breaking-news'
import { SiteQuery, BreakingNewsQuery } from '@/generated/graphql'

export class API {
  static async getSiteData() {
    const data = await client.request<SiteQuery>(SITE_QUERY)

    const {
      logo,
      siteNavigation,
      quickLinks,
      footerLinks,
      socialMedia,
      mobileAppLinks,
    } = data.site

    return {
      logo,
      siteNavigation,
      quickLinks,
      footerLinks,
      socialMedia,
      mobileAppLinks,
    }
  }

  static async getBreakingNews() {
    const data = await client.request<BreakingNewsQuery>(BREAKING_NEWS_QUERY)
    return data
  }
}
