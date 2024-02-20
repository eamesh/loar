const config = {
	development: {
		api: 'http://localhost:3000/api/v1',
		host: 'http://localhost:3000'
	},
	production: {
		api: 'https://api.loar.cc/api/v1',
		host: 'https://api.loar.cc'
	}
}

export default config[process.env.NODE_ENV]
