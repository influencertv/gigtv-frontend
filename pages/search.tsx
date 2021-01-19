import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Layout from '@/components/Layout/Layout'
import Search from '@/components/Search/Search'

const SearchPage: NextPage = () => {
  return (
    <>
      <NextSeo description="Influencer TV search for the best articles!!!" />
      <Layout>
        <Search />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 1,
  }
}

export default SearchPage
