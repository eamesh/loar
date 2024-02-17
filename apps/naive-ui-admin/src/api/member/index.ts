import { http } from '@/utils/http/axios';

//获取table
export function getMembers(params) {
  return http.request({
    url: `/member/list`,
    method: 'post',
    params,
  });
}

export function updateMemberType(id, type) {
  return http.request({
    url: `/member/${id}`,
    method: 'put',
    params: {
      type,
    },
  });
}

export function changeMemberRecharge(id, params) {
  return http.request({
    url: `/member/recharge/${id}`,
    method: 'post',
    params,
  });
}

export function createMember(params) {
  return http.request({
    url: `/member/admin`,
    method: 'post',
    params,
  });
}

export function updateMember(id, params) {
  return http.request({
    url: `/member/${id}/admin`,
    method: 'put',
    params,
  });
}

export function getMemberDetail(id) {
  return http.request({
    url: `/member/${id}/admin`,
    method: 'get',
  });
}
