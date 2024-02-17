import { http } from '@/utils/http/axios';

//获取table
export function changePassword(params) {
  return http.request({
    url: `/user/password`,
    method: 'put',
    params,
  });
}
