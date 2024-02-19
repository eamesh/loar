import { http } from '@/utils/http/axios';

//获取table
export function getMarkets() {
  return http.request({
    url: `/stock/market`,
    method: 'get',
  });
}
