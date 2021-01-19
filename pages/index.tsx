import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import useMedia from 'use-media'

import { DESKTOP_VIEW } from '@/config'
import Layout from '@/components/Layout'
import BrandHeader from '@/components/BrandHeader/BrandHeader'
import FeaturedSection from '@/components/FeaturedSection/FeaturedSection'
import BreakingNews from '@/components/BreakingNews/BreakingNews'
import CategorySection from '@/components/CategorySection/CategorySection'
import { ArticleAPI } from '@/lib/api/article-api'
import { CategoryAPI } from '@/lib/api/category-api'
import {
  CATEGORY_IDS_KEY,
  SITE_DATA_KEY,
  useCategoryIds,
} from '@/lib/hooks/api-hooks'
import { API } from '@/lib/api/api'
import { prefetch } from '@/lib/api/query-client'

const Home: NextPage = () => {
  const isDesktop = useMedia({ minWidth: DESKTOP_VIEW })
  const { data: categories, isSuccess } = useCategoryIds()

  return (
    <>
      <NextSeo description="Influencer TV all the best breaking news!!!" />
      <Layout title="INFLUENCER TV+">
        {isDesktop || <BreakingNews />}
        <BrandHeader />
        {isDesktop && <BreakingNews />}

        <FeaturedSection />
        {isSuccess &&
          categories.map(category => (
            <CategorySection categoryId={category.id} key={category.id} />
          ))}
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  prefetch(SITE_DATA_KEY)

  await queryClient.prefetchQuery(SITE_DATA_KEY, API.getSiteData)
  await queryClient.prefetchQuery('featured-articles', ArticleAPI.getFeatured)
  await queryClient.prefetchQuery(
    'latest-opinions',
    ArticleAPI.getLatestOpinions
  )
  await queryClient.prefetchQuery(['latest-articles', 5], () =>
    ArticleAPI.getAll({ limit: 5 })
  )
  await queryClient.prefetchQuery(CATEGORY_IDS_KEY, CategoryAPI.getIds)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1,
  }
}

export default Home
