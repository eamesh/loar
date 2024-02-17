import {getToken,removeToken} from './auth';
import config from '@/config/index.js'

export function http(options = {
	url: '',
	header: {}
}) {
	options.url = `${config.api}${options.url}`;
	// 判断本地是否存在token，如果存在则带上请求头
	if (getToken()) {
		options.header = Object.assign({
			'content-type': 'application/json',
			'Authorization': `Bearer ${getToken()}`
		}, options.header);
	}

	return new Promise((resolved, rejected) => {
		options.success = (res) => {
			console.log(res.statusCode <= 200 || res.statusCode >=300, res.statusCode)
			// 如果请求回来的状态码不是200则执行以下操作
			if (res.statusCode < 200 || res.statusCode >300) {
				// 非成功状态码弹窗
				// uni.showToast({
				// 	icon: 'none',
				// 	duration: 3000,
				// 	title: `${res.data.msg}`
				// });
				// 登陆失效
				if (res.statusCode === 403) {
					// 清除本地token
					removeToken()
					// 关闭所有页面返回到登录页
					uni.reLaunch({
						url: '/pages/login/login'
					})
				}
				// 返回错误信息
				rejected(res)
			} else {
				// 请求回来的状态码为200则返回内容
				resolved(res.data)
			}
		};
		options.fail = (err) => {
			// 请求失败弹窗
			uni.showToast({
				icon: 'none',
				duration: 3000,
				title: '服务器错误,请稍后再试'
			});
			rejected(err);
		};
		uni.request(options);
	});
}

export default http;
