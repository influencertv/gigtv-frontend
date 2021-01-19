import { QueryClient, QueryKey } from 'react-query'
import { APIS } from '@/lib/hooks/api-hooks'

export async function prefetch(...keys: QueryKey[]) {
  const queryClient = new QueryClient()

  for (const key of keys) {
    if (typeof key === 'string') {
      await queryClient.prefetchQuery(key, APIS[key])
    } else if (key instanceof Array) {
      if (!APIS[key[0]]) {
        throw new Error(
          `you have probably forgotten to map '${
            key[0] || 'your key'
          }' to the fetching function`
        )
      }
      await queryClient.prefetchQuery(key, APIS[key[0]])
    } else {
      throw new Error("key can be only of type 'string' or instance of Array")
    }
  }

  return queryClient
}
