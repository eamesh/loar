import { http } from '@/utils/http'

/** get 请求 */
export function getFooAPI(name: string) {
  return http<any>({
    url: `/foo`,
    method: 'GET',
    query: { name },
  })
}
