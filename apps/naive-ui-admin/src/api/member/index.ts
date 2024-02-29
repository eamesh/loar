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

export function getRechargeListAdmin(params) {
  return http.request({
    url: `/member/recharge/list/admin`,
    method: 'post',
    params,
  });
}

export function passMemberRecharge(id, params) {
  return http.request({
    url: `/member/recharge/${id}/status`,
    method: 'post',
    params,
  });
}

export function getWithdrawListAdmin(params) {
  return http.request({
    url: `/member/withdraw/list/admin`,
    method: 'post',
    params,
  });
}

export function updateWithdrawStatus(id, params) {
  return http.request({
    url: `/member/withdraw/${id}/status`,
    method: 'post',
    params,
  });
}

export function requestRechargeList(params) {
  // recharge/list
  return http.request({
    url: `/recharge/list`,
    method: 'post',
    params,
  });
}

export function passRechargeMoney(id, params) {
  return http.request({
    url: `/recharge/${id}/pass`,
    method: 'post',
    params,
  });
}

export function refuseRechargeMoney(id) {
  return http.request({
    url: `/recharge/${id}/refuse`,
    method: 'post',
  });
}

export function requestWithdrawList(params) {
  // recharge/list
  return http.request({
    url: `/withdraw/list`,
    method: 'post',
    params,
  });
}

export function refuseWithdrawMoney(id) {
  return http.request({
    url: `/withdraw/${id}/refuse`,
    method: 'post',
  });
}

export function passWithdrawMoney(id) {
  return http.request({
    url: `/withdraw/${id}/pass`,
    method: 'post',
  });
}
