module.exports = {
  extends: [
    "./index.js",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "prettier/react"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    // https://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": [2, "prefer-double"],

    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
    "react/jsx-curly-spacing": ["error", { when: "never" }],
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
    "react/jsx-no-undef": ["error", { allowGlobals: true }],
    "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
    "react/jsx-uses-vars": "warn",
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-pascal-case": [
      "warn",
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    "react/jsx-uses-react": "warn",
    "react/no-danger-with-children": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/no-is-mounted": "warn",
    "react/no-typos": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-render-return": "error",
    "react/style-prop-object": "warn",

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    "jsx-a11y/accessible-emoji": "warn",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/anchor-has-content": "warn",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["noHref", "invalidHref"]
      }
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-role": ["warn", { ignoreNonDOM: true }],
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/heading-has-content": "warn",
    "jsx-a11y/iframe-has-title": "warn",
    "jsx-a11y/img-redundant-alt": "warn",
    "jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
    "jsx-a11y/no-access-key": "warn",
    "jsx-a11y/no-distracting-elements": "warn",
    "jsx-a11y/no-redundant-roles": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "jsx-a11y/scope": "warn"
  }
};
