import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Layout from '@/components/Layout/Layout'
import LiveTV from '@/components/LiveTV/LiveTV'

const Live: NextPage = () => {
  return (
    <>
      <NextSeo description="Influencer TV all the best streaming content!!!" />
      <Layout title="INFLUENCER TV+">
        <LiveTV />
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

export default Live
