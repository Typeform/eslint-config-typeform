let config = {}

try {
  require('prettier')

  config = {
    plugins: ['prettier'],
    extends: ['plugin:prettier/recommended'],
    rules: {
      'prettier/prettier': 'error',
    },
  }
} catch (err) {}

module.exports = config
