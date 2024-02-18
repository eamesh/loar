const uni = require('@uni-helper/eslint-config')
const unocss = require('@unocss/eslint-plugin')

module.exports = uni(
  {},
  unocss.configs.flat,
  {
    rules: {
      'no-console': 'off',
      'node/prefer-global/process': 'off',
    },
  },
)
