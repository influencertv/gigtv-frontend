import { GetStaticProps, NextPage } from 'next'

import { useGuestRoute } from '@/lib/hooks/hooks'
import { SignupForm } from '@/components/Forms'
import Layout from '@/components/Layout'

const Register: NextPage = () => {
  useGuestRoute('/')

  return (
    <Layout>
      <SignupForm />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 1,
  }
}

export default Register
