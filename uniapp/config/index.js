const config = {
	development: {
		api: 'http://localhost:3001/api/v1',
		host: 'http://localhost:3001',
		ws: 'ws://localhost:3001'
	},
	production: {
		api: 'https://api.loar.cc/api/v1',
		host: 'https://api.loar.cc',
		ws: 'wss://api.loar.cc'
	}
}

export default config[process.env.NODE_ENV]
