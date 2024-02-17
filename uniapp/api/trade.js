import { http } from '@/util/request.js'

export const getAccountList = function (market) {
	return http({
		url: `/member/account/list`,
		method: 'POST',
		data: {
			market
		}
	})
}

export const getPositions = function (market) {
	return http({
		url: `/stock/position`,
		method: 'POST',
		data: {
			market
		}
	})
}

export const positionSell = function (id) {
	return http({
		url: `/stock/position/${id}/sell`,
		method: 'POST'
	})
}