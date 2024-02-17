import { http } from '@/util/request.js'

export const getSettingBykey = function (key) {
	return http({
		url: `/setting/${key}`,
		method: 'GET',
	})
}
