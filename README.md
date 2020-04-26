# @leafly-com/eslint-config

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Release](https://github.com/Leafly-com/eslint-config-leafly/workflows/Release/badge.svg)

ESLint configuration for vanilla Javascript projects at Leafly.

This will run `eslint` on your Javascript files with the general rules that have
been agreed upon at Leafly and then it can format the project's Javascript code
using `prettier`.

---

## Using in your project

### [prerolled-js](https://github.com/Leafly-com/prerolled-js)

It is recommended to consume this library through our [`prerolled-js`](https://github.com/Leafly-com/prerolled-js) library that includes this and many other Leafly libraries and configurations for our JavaScript applications. There is much more information about setting up the Leafly linting configurations in that repo with other linters, scripts, CI integration, etc.

However, it can be used by itself as well in the following manner:

To use this package in your repo:

1. Add an `.npmrc` file in the root of your application repo with the following:

   ```shell
   @leafly-com:registry=https://npm.pkg.github.com/
   ```

2. Log into the Github Package Registry. _This is required for `yarn install`:_

   - In your terminal, run:

   ```shell
   npm login --registry=https://npm.pkg.github.com
   ```

   - Username is your Github Username
   - Password is a [personal access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) from Github that has at least `repo` and `read:packages` scope access
   - Your Leafly email

3. Install the package:

   ```shell
   yarn add --dev @leafly-com/eslint-config
   ```

   - `eslint`, `prettier`, and `stylelint` will be installed automatically with this package

4. In your Dockerfile, make sure you copy the `.npmrc` file over BEFORE it runs `yarn install`

---

## ESLint configuration

Create an `.eslintrc.js` file in your project with the following:

### For VanillaJS projects

```js
module.exports = {
  extends: "@leafly-com",
  rules: {
    // Your project-specific rules
  }
};
```

Note: This configuration extends `eslint:recommended` and `plugin:prettier/recommended`

### For React projects

```js
module.exports = {
  extends: "@leafly-com/eslint-config/react.js",
  rules: {
    // Your project-specific rules
  }
};
```

Note: This configuration implements `@leafly-com/eslint-config`, `eslint-config-react-app`, `plugin:jsx-a11y/recommended`, and `plugin:react-hooks`
