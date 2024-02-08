import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
	state: () => {
		return { 
			user: {},
			token: false
		};
	},

	actions: {
		setToken() {
			this.token = true
			console.log(this.token)
		},
		
		logout() {
			this.token = false
		}
	},
});