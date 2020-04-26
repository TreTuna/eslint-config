const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:testing-library/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest-dom/recommended",
    "prettier",
    "prettier/babel"
  ],
  plugins: ["import"],
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      impliedStrict: true
    },
    sourceType: "module"
  },
  rules: {
    // http://eslint.org/docs/rules/
    "array-callback-return": "warn",
    "default-case": ["warn", { commentPattern: "^no default$" }],
    "dot-location": ["warn", "property"],
    eqeqeq: ["error", "smart"],
    "func-names": ["error", "always"],
    "linebreak-style": ["error", "unix"],
    "getter-return": "warn",
    "new-parens": "warn",
    "no-array-constructor": "warn",
    "no-caller": "warn",
    "no-cond-assign": ["warn", "except-parens"],
    "no-const-assign": "warn",
    "no-control-regex": "warn",
    "no-console": "off",
    "no-debugger": "warn",
    "no-delete-var": "warn",
    "no-dupe-args": "warn",
    "no-dupe-class-members": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-empty-character-class": "warn",
    "no-empty-pattern": "warn",
    "no-eq-null": "error",
    "no-eval": "warn",
    "no-ex-assign": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-label": "warn",
    "no-fallthrough": "warn",
    "no-floating-decimal": "error",
    "no-func-assign": "warn",
    "no-implied-eval": "warn",
    "no-invalid-regexp": "warn",
    "no-iterator": "warn",
    "no-label-var": "warn",
    "no-labels": ["warn", { allowLoop: true, allowSwitch: false }],
    "no-lone-blocks": "warn",
    "no-loop-func": "warn",
    "no-mixed-operators": [
      "warn",
      {
        groups: [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        allowSamePrecedence: false
      }
    ],
    "no-multi-str": "warn",
    "no-native-reassign": "warn",
    "no-negated-in-lhs": "warn",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-new-symbol": "warn",
    "no-new-wrappers": "warn",
    "no-obj-calls": "warn",
    "no-octal": "warn",
    "no-octal-escape": "warn",
    "no-redeclare": ["warn", { builtinGlobals: false }],
    "no-regex-spaces": "warn",
    "no-restricted-syntax": ["warn", "WithStatement"],
    "no-script-url": "warn",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-sequences": "warn",
    "no-shadow-restricted-names": "warn",
    "no-sparse-arrays": "warn",
    "no-template-curly-in-string": "warn",
    "no-this-before-super": "warn",
    "no-throw-literal": "warn",
    "no-undef": "error",
    "no-useless-concat": "error",
    "no-unreachable": "warn",
    "no-restricted-globals": ["error"].concat(restrictedGlobals),
    "no-restricted-properties": [
      "error",
      {
        object: "require",
        property: "ensure",
        message: "Please use import() instead which allows for code-splitting"
      },
      {
        object: "System",
        property: "import",
        message: "Please use import() instead which allows for code-splitting"
      }
    ],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    "no-unused-labels": "warn",
    "no-unused-vars": [
      "warn",
      {
        args: "none",
        ignoreRestSiblings: true
      }
    ],
    "no-use-before-define": [
      "warn",
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],
    "no-useless-computed-key": "warn",
    "no-useless-constructor": "warn",
    "no-useless-escape": "warn",
    "no-useless-rename": [
      "warn",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],
    "no-with": "warn",
    "no-whitespace-before-property": "warn",
    "one-var-declaration-per-line": ["error", "always"],
    "prefer-arrow-callback": "error",
    "require-yield": "warn",
    "rest-spread-spacing": ["warn", "never"],
    strict: ["warn", "never"],
    "unicode-bom": ["warn", "never"],
    "use-isnan": "warn",
    "valid-typeof": "warn",
    "vars-on-top": "error",

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    "import/first": "error",
    "import/no-amd": "error",
    "import/no-webpack-loader-syntax": "error"
  }
};
