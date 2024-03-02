import { http } from '@/util/request.js'

export const requestUpgrade = function (data) {
	console.log(111,data)
	return http({
		url: `/setting/app/version`,
		method: 'POST',
		data
	})
}

