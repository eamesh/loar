import { http } from '@/util/request.js'

export const requestWithdraw = function (data) {
	return http({
		url: `/withdraw`,
		method: 'POST',
		data
	})
}
