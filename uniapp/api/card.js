import { http } from '@/util/request.js'

export const createCard = function (data) {
	return http({
		url: `/card`,
		method: 'POST',
		data
	})
}

export const listCard = function (data) {
	return http({
		url: `/card/list`,
		method: 'POST',
		data
	})
}

export const deleteCard = function (id) {
	return http({
		url: `/card/${id}`,
		method: 'DELETE',
	})
}