import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import jestPlugin from 'eslint-plugin-jest'
import importPlugin from 'eslint-plugin-import'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
  // Ignore test-cases directory (these files intentionally have errors for testing)
  {
    ignores: ['test-cases/**'],
  },

  // Base recommended configs (only jsx-a11y and prettier, not eslint:recommended to match original behavior)
  jsxA11yPlugin.flatConfigs.recommended,
  prettierConfig,

  // JavaScript/JSX configuration
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      jest: jestPlugin,
      import: importPlugin,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          generators: true,
        },
      },

      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.es2021,
        ...globals.jest,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'no-var': 'warn',
      'curly': 'warn',
      'prefer-destructuring': 'warn',
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
  },

  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      jest: jestPlugin,
      import: importPlugin,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          generators: true,
        },
      },

      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.es2021,
        ...globals.jest,
      },
    },

    settings: {
      react: {
        version: 'detect',
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
  },
]
