module.exports = {
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/react',
  ],
  plugins: ['jest'],
  env: {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jest': true,
    'node': true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaFeatures: {
      generators: true,
    },
  },
  rules: {
    '@typescript-eslint/no-extra-semi': 'off',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
      },
    ],
    'import/export': 'warn',
    'jest/no-focused-tests': 'error',
    'no-console': 'warn',
    'prefer-template': 'warn',
    'react/prop-types': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
