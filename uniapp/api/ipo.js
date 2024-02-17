import { http } from '@/util/request.js'

export const getSubscribes = function (market, type) {
	return http({
		url: `/stock/subscribe?market=${market}&type=${type}`,
		method: 'GET',
	
	})
}

export const getSubscribeDetail = function (id) {
	return http({
		url: `/stock/subscribe/${id}`,
		method: 'GET',
	})
}

export const orderSubscribe = function(id, data) {
	return http({
		url: `/stock/subscribe/${id}/order`,
		method: 'POST',
		data
	})
}