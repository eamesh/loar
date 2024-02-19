import { http } from '@/util/request.js'

export const getSettingBykey = function (key) {
	return http({
		url: `/setting/${key}`,
		method: 'GET',
	})
}

export const getSettings = function () {
	return http({
		url: `/setting/system`,
		method: 'GET',
	})
}
