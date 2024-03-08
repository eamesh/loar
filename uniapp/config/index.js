const config = {
	development: {
		api: 'https://api.loar.cc/api/v1',
		host: 'https://api.loar.cc',
		ws: 'wss://api.loar.cc'
	},
	production: {
		api: 'https://api.loar.cc/api/v1',
		host: 'https://api.loar.cc',
		ws: 'wss://api.loar.cc'
	}
}

export default config[process.env.NODE_ENV]
