import { http } from '@/util/request.js'

export const requestRecharge = function (data) {
	return http({
		url: `/member/recharge`,
		method: 'POST',
		data
	})
}

export const requestWithdraw = function (data) {
	return http({
		url: `/member/withdraw`,
		method: 'POST',
		data
	})
}

export const requestRechargeRecord = function () {
	return http({
		url: `/member/recharge`,
		method: 'GET'
	})
}

export const requestWithdrawRecord = function () {
	return http({
		url: `/member/withdraw`,
		method: 'GET'
	})
}

export const getProfile = function () {
	return http({
		url: `/member`,
		method: 'GET'
	})
}

export const requestMemberPositionsHistory = function(data) {
	return http({
		url: `/stock/position`,
		method: 'POST',
		data
	})
}

export const getSubscribeMemberList = function() {
	return http({
		url: `/stock/subscribe/member`,
		method: 'POST',
	})
}