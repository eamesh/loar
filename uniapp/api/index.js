import { http } from '@/util/request.js'

export const index = function (type) {
	return http({
		url: `/index`,
		method: 'GET',
		header: {
			'stock-type': type
		}
	})
}

