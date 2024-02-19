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

export function saveSetting(params) {
  return http.request({
    url: `/setting/save`,
    method: 'post',
    params,
  });
}

export function getSystemSettings() {
  return http.request({
    url: `/setting/system`,
    method: 'get',
  });
}
