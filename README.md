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

To add `prettier` to tour `eslint` workflow, just install:

```sh
yarn add -D prettier
```

And point `prettier` to the shared configuration in `package.json`:

```json
  "prettier": "@typeform/eslint-config/prettier"
```

Now run `eslint` with:

```sh
yarn eslint . --fix
```
