import { http } from '@/util/request.js'

export const getStocks = function (type, page = 1) {
	return http({
		url: `/index/stocks?page=${page}`,
		method: 'GET',
		header: {
			'stock-type': type
		}
	})
}

export const buy = function (data) {
	return http({
		url: `/stock/buy`,
		method: 'POST',
		data
	})
}

export const getFavorite = function (type, page = 1) {
	return http({
		url: `/stock/favorite`,
		method: 'GET',
	})
}

export const deleteFavorite = function (ids) {
	return http({
		url: `/stock/favorites`,
		method: 'DELETE',
		data: {
			ids
		}
	})
}

export const getMarket = function (type, page = 1) {
	return http({
		url: `/stock/market`,
		method: 'GET',
	})
}

export const searchStock = function (kwd) {
	return http({
		url: `/stock/search?kwd=${kwd}`,
		method: 'GET',
	})
}

export const getStock = function (id) {
	// /stock/${route.query.id}/panel
	return http({
		url: `/stock/${id}/panel`,
		method: 'GET',
	})
}