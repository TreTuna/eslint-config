# @TreTuna/eslint-config

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

ESLint configuration for TreTuna's JavaScript applications.

---

## Using in your project

Install the package:

```shell
npm install --dev @tretuna/eslint-config
```

or

```shell
yarn add --dev @tretuna/eslint-config
```

- `eslint`

---

## ESLint configuration

Create an `.eslintrc.js` file in your project with the following:

### For VanillaJS projects

```js
module.exports = {
  extends: "@tretuna",
  rules: {
    // Your project-specific rules
  }
};
```

Note: This configuration extends `eslint:recommended` and `plugin:prettier/recommended`

### For React projects

```js
module.exports = {
  extends: "@tretuna/eslint-config/react.js",
  rules: {
    // Your project-specific rules
  }
};
```

Note: This configuration implements `@tretuna/eslint-config`, `plugin:react/recommended`, `plugin:jsx-a11y/recommended`, `plugin:testing-library/react`, `plugin:react-hooks`, and `prettier/react`
