import { GetStaticProps, NextPage } from 'next'

import { useGuestRoute } from '@/lib/hooks/hooks'
import { SigninForm } from '@/components/Forms'
import Layout from '@/components/Layout'

const Login: NextPage = () => {
  useGuestRoute('/')

  return (
    <Layout>
      <SigninForm />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 1,
  }
}

export default Login
