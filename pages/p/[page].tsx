import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import { PAGE_KEY, usePage } from '@/lib/hooks/api-hooks'
import { PageAPI } from '@/lib/api/page-api'
import GenericPage from '@/components/GenericPage/GenericPage'
import Layout from '@/components/Layout'

const Page: NextPage = () => {
  const router = useRouter()
  const { data } = usePage('/' + router.query.page)

  if (!data || !data.page) {
    return <div></div>
  }

  return (
    <>
      <NextSeo description={data.page.description} />
      <Layout title={data.page.title}>
        <GenericPage title={data.page.title} content={data.page.content} />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await PageAPI.getAll()

  return {
    paths: pages.map(page => ({
      params: {
        page: page.path.slice(1),
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const path = '/' + params.page
  const queryClient = new QueryClient()

  queryClient.prefetchQuery([PAGE_KEY, path])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1,
  }
}

export default Page
