let config = {
  extends: ['standard', 'standard-jsx'],
}

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
