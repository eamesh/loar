import { http } from '@/utils/http/axios';

//获取table
export function createResource(params) {
  return http.request({
    url: `/stock/resource`,
    method: 'post',
    params,
  });
}

export function updateResource(id, params) {
  return http.request({
    url: `/stock/resource/${id}`,
    method: 'put',
    params,
  });
}

export function getResources(params) {
  return http.request({
    url: `/stock/resource/list`,
    method: 'post',
    params,
  });
}

export function getResourceById(id) {
  return http.request({
    url: `/stock/resource/${id}`,
    method: 'get',
  });
}
