<a href=https://engineering-metrics.typeform.tf/standards-adoption-tool/reports/eslint-config-typeform/><img src=https://api.typeform.com/repositories/eslint-config-typeform/badges.svg /></a>

# eslint-config-typeform

ESLint configuration for [Typeform](https://github.com/Typeform/) front-end projects

## Install

```sh
pnpm add -D eslint @typeform/eslint-config
```

## Usage

This package uses ESLint's flat config format. Create an `eslint.config.js` file with the following content:

```js
import typeformConfig from '@typeform/eslint-config'

export default typeformConfig
```

Or extend it with your own rules:

```js
import typeformConfig from '@typeform/eslint-config'

export default [
  ...typeformConfig,
  {
    rules: {
      // Your custom rules
    },
  },
]
```

And run with:

```sh
pnpm eslint . --fix
```

## Development

This package is written in TypeScript and requires building before use:

```sh
# Install dependencies
pnpm install

# Build TypeScript
pnpm build

# Run tests
pnpm test

# Lint
pnpm lint
```

The `prepare` script automatically builds the package after `pnpm install`.
