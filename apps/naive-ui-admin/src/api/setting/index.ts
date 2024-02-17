import { http } from '@/utils/http/axios';

//获取table
export function upsertSetting(params) {
  return http.request({
    url: `/setting`,
    method: 'post',
    params,
  });
}

export function getSetting(key) {
  return http.request({
    url: `/setting/${key}`,
    method: 'get',
  });
}
