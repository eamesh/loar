const config = {
	development: {
		api: 'http://localhost:3000/api/v1'
	},
	production: {
		api: 'https://api.loar.cc/api/v1'
	}
}

export default config[process.env.NODE_ENV]
