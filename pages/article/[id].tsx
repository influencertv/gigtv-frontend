import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import { ArticleAPI } from '@/lib/api/article-api'
import { ARTICLE_KEY, useArticle } from '@/lib/hooks/api-hooks'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero/Hero'
import Article from '@/components/Article/Article'
import { useRouter } from 'next/router'

const ArticlePage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: article } = useArticle(id as string)

  if (!article) {
    return <div></div>
  }

  return (
    <>
      <NextSeo
        description={article.excerpt}
        openGraph={{
          title: article.title,
          description: article.excerpt,
          url: `https://influencertvs.com/article/${article.id}`,
          images: [
            {
              url: article.image?.url,
              width: article.image?.width,
              height: article.image?.height,
              alt: article.image?.alternativeText,
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
      <Layout title={article.title}>
        {article.category?.image && (
          <Hero imageUrl={article.category.image.url}>
            <Link href={`/category/${article.category.id}`}>
              <a>
                <h2>{article.category.name}</h2>
              </a>
            </Link>
          </Hero>
        )}
        <Article
          title={article.title}
          content={article.content}
          posted_at={article.posted_at}
        />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await ArticleAPI.getAll()
  return {
    paths: articles.map(article => ({
      params: {
        id: article.id,
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<unknown, { id: string }> = async ({
  params,
}) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery([ARTICLE_KEY, params.id], () =>
    ArticleAPI.getOne(params.id)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1,
  }
}

export default ArticlePage
