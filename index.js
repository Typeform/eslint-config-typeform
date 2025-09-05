module.exports = {
  extends: ['react-app', 'plugin:jsx-a11y/recommended', 'prettier'],
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
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
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
