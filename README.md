# eslint-config-typeform

ESLint configuration for [Typeform](https://github.com/Typeform/) front-end projects

## Install

```sh
yarn add eslint @typeform/eslint-config --dev
```

## Usage

If you want to use the default configuration, you can simply create a `.eslintrc.js` file (or [alternatives](https://eslint.org/docs/user-guide/configuring#configuration-file-formats)) with the following content:

```js
module.exports = {
  extends: ['@typeform/eslint-config'],
}
```

And run with:

```sh
yarn eslint . --fix
```

## Using with prettier

If your codebase uses prettier for styles formatting, you can override default `standard` rules updating your `eslint` config:

```js
module.exports = {
  extends: ['@typeform/eslint-config', 'prettier', 'prettier/react', 'plugin:prettier/recommended'],
}
```

and installing `eslint-plugin-prettier`:

```sh
yarn add --dev eslint-plugin-prettier
```
