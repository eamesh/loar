import { http } from '@/utils/http/axios';

//获取table
export function getSymbolList(params, page = 1) {
  return http.request({
    url: `/stock/symbol/list?page=${page}`,
    method: 'post',
    params,
  });
}
