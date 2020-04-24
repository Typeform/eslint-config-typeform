const a11yLintRules = require('./accessibility/lint-rules')
const performanceRules = require('./performance/lint-rules')

const config = {
  parser: 'babel-eslint',
  extends: [
    './with-prettier.js',
    'standard',
    'standard-jsx',
    'plugin:import/errors',
    'plugin:react/recommended',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['filenames', 'jsx-a11y', 'react', 'react-perf', 'react-hooks', 'jest'],
  settings: {
    react: {
      version: '16',
    },
  },
  env: {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jest': true,
    'node': true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
    },
  },
  rules: Object.assign({}, a11yLintRules, performanceRules, {
    'react/jsx-no-target-blank': 'warn',
    'react/no-danger': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/jsx-handler-names': 'warn',
    'react/jsx-no-bind': 'warn',
    'react/sort-comp': [
      'warn',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
      },
    ],
    'import/export': 'warn',
    'filenames/match-regex': ['warn', '^_?[a-z0-9-.]+$'],
    'jest/no-focused-tests': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'complexity': ['warn', { max: 7 }],
    'consistent-return': 'warn',
    'global-require': 'warn',
    'no-console': 'warn',
    'no-else-return': 'warn',
    'no-nested-ternary': 'warn',
    'no-shadow': 'warn',
    'no-unneeded-ternary': 'warn',
    'object-shorthand': 'warn',
    'prefer-const': 'warn',
    'prefer-template': 'warn',
  }),
}

module.exports = config
