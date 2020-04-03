# eslint-config-typeform

ESLint configuration for [Typeform](https://github.com/Typeform/) front-end projects

## Install

```sh
yarn add eslint babel-eslint @typeform/eslint-config --dev
```

## Usage

If you want to use the default configuration, you can simply create a `.eslintrc.js` file (or [alternatives](https://eslint.org/docs/user-guide/configuring#configuration-file-formats)) with the following content:

```js
module.exports = {
  extends: ['@typeform/eslint-config'],
}
```

## Contribution

Create a pull request to master branch in Github. Travis CI will automatically run in the PR build and release to npm once merged.

And run with:

```sh
yarn eslint . --fix
```
