import { http } from '@/util/request.js'

export const getArticleList = function (params) {
	return http({
		url: `/article/list`,
		method: 'POST',
		data: params
	})
}

export const getArticleDetail = function (id) {
	return http({
		url: `/article/${id}`,
		method: 'GET',
	})
}