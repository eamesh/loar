import en from './en.json'
import zhHant from './zh-Hant.json'

export const DEFAULT_LOCALE = "zh-Hant"

export default {
  locale: DEFAULT_LOCALE,
	messages: {
		en,
		'zh-Hant': zhHant,
	}
}
