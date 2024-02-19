import { http } from '@/utils/http/axios';

//获取table
export function createSubscribe(params) {
  return http.request({
    url: `/stock/subscribe`,
    method: 'post',
    params,
  });
}

export function getSubscribeDetail(id) {
  return http.request({
    url: `/stock/subscribe/${id}/admin`,
    method: 'get',
  });
}

export function updateSubscribeDetail(id, params) {
  return http.request({
    url: `/stock/subscribe/${id}`,
    method: 'put',
    params,
  });
}

export function updateMemberSubscribeType(id, type) {
  return http.request({
    url: `/stock/update/${id}/subscribe`,
    method: 'post',
    params: {
      type,
    },
  });
}
