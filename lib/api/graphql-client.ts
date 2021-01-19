import { GraphQLClient } from 'graphql-request'
import { API_URL } from '@/config'

const endpoint = `${API_URL}/graphql`

const client = new GraphQLClient(endpoint)

const token =
  typeof window !== 'undefined' ? localStorage.getItem('@token') : null

if (token) {
  client.setHeader('Authorization', `Bearer ${token}`)
}

export default client
