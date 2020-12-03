module.exports = {
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/react',
    'prettier/standard',
    'standard',
    'standard-jsx',
  ],
  plugins: ['jest'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaFeatures: {
      generators: true,
    },
  },
  rules: {
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
    'comma-dangle': ['error', 'always-multiline'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
