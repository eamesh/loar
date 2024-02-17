import { http } from '@/util/request.js'

export const requestSignin = function (data) {
	return http({
		url: `/member/signin`,
		method: 'POST',
		data
	})
}

export const requestSignup = function (data) {
	return http({
		url: `/member/signup`,
		method: 'POST',
		data
	})
}

export const requestChangepassword = function (data) {
	return http({
		url: `/member/password`,
		method: 'POST',
		data
	})
}