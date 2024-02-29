import { http } from '@/util/request.js'

export const requestRecharge = function (data) {
	return http({
		url: `/recharge`,
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
		url: `/recharge/member/list`,
		method: 'GET'
	})
}

export const requestWithdrawRecord = function () {
	return http({
		url: `/withdraw/member/list`,
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

export const exchange = function (data) {
	return http({
		url: '/member/exchange',
		method: 'POST',
		data
	})
}

export const transer = function (data) {
	return http({
		url: '/member/transer',
		method: 'POST',
		data
	})
}

export const getTypeOrder = function (data) {
	return http({
		url: '/member/type_order',
		method: 'POST',
		data
	})
}

export const getAccountList = function (data) {
	return http({
		url: '/recharge-account/enable',
		method: 'GET',
	})
}