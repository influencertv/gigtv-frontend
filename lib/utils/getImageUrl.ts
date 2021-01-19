import { API_URL } from '@/config'

export function getImageUrl(url: string): string {
  return url.startsWith('/') ? API_URL + url : url
}
