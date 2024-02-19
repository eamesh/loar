import { http } from '@/utils/http/axios';

//获取table
export function getPostions(params) {
  return http.request({
    url: `/stock/position/list`,
    method: 'post',
    params,
  });
}

export function getStockSubscribeList(params) {
  return http.request({
    url: `/stock/subscribe/list`,
    method: 'post',
    params,
  });
}

export function getStockSubscribeOrder(params) {
  return http.request({
    url: `/stock/subscribe/order`,
    method: 'post',
    params,
  });
}

export function createStockSymbol(params) {
  return http.request({
    url: `/stock/symbol`,
    method: 'post',
    params,
  });
}
