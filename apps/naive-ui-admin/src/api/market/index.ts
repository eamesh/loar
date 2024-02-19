import { http } from '@/utils/http/axios';

//获取table
export function createMarket(params: any) {
  return http.request({
    url: `/stock/market`,
    method: 'post',
    params,
  });
}

//获取table
export function getMarketLists(params) {
  return http.request({
    url: `/stock/market/list`,
    method: 'post',
    params,
  });
}

export const getMarketDetail = (id) => {
  return http.request({
    url: `/stock/market/${id}`,
    method: 'get',
  });
};

export const updateMarketDetail = (id, params) => {
  return http.request({
    url: `/stock/market/${id}`,
    method: 'put',
    params,
  });
};
