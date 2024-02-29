import {
	defineStore
} from 'pinia';

const useThemeStore = defineStore('theme', {
	state: () => {
		return {
			theme: 'light'
		}
	}
})