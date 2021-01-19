import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import { CategoryAPI } from '@/lib/api/category-api'
import { CATEGORY_KEY, useCategory } from '@/lib/hooks/api-hooks'
import Layout from '@/components/Layout'
import Category from '@/components/Category/Category'

const CategoryPage: NextPage = () => {
  const router = useRouter()
  const { id: categoryId } = router.query
  const { data: category } = useCategory(categoryId as string)

  if (!category) {
    return <div></div>
  }

  return (
    <>
      <NextSeo
        description={category.description}
        openGraph={{
          title: category.name,
          description: category.description,
          url: `https://influencertvs.com/category/${categoryId}`,
          images: [
            {
              url: category.image?.url,
              width: category.image?.width,
              height: category.image?.height,
              alt: category.image?.alternativeText,
            },
          ],
          site_name: 'Influencer TV',
        }}
        twitter={{
          handle: '@influencertv',
          site: '@influencertv',
          cardType: 'summary_large_image',
        }}
      />
      <Layout title={category.name}>
        <Category categoryId={categoryId as string} />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await CategoryAPI.getAll()

  return {
    paths: categories.map(category => ({
      params: {
        id: category.id,
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<unknown, { id: string }> = async ({
  params,
}) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery([CATEGORY_KEY, params.id], () =>
    CategoryAPI.getOne(params.id, 100)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1,
  }
}

export default CategoryPage
