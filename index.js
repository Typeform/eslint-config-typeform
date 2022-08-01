module.exports = {
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
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
    'no-var': 'warn',
    'curly': 'warn',
    'prefer-destructuring': 'warn',
    'promise/always-return': 'warn',
    'promise/no-return-wrap': 'warn',
    'promise/param-names': 'warn',
    'promise/catch-or-return': 'warn',
    'promise/no-new-statics': 'warn',
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
    'no-debugger': 'error',
    'prefer-template': 'warn',
    'react/prop-types': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-key': ['warn', { checkFragmentShorthand: true }],
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-restricted-imports': [
      'warn',
      {
        patterns: [
          {
            group: ['@typeform/kitt/lib/*'],
            message:
              "🙈 The lib notation is deprecated. Refer to the Kitt's doc, and ping the FEAR team if you have a doubt",
          },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
