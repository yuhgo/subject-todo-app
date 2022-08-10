module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: { jsx: true },
    project: "./tsconfig.json",
  },
  settings: {
    tailwindcss: { groupByResponsive: true },
    react: { version: "detect" },
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "simple-import-sort",
    "sort-destructure-keys",
    "tailwindcss",
    "import-access",
  ],
  extends: [
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier", // prettierとeslintとの衝突回避
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:tailwindcss/recommended", // class名を整形したりする
  ],

  rules: {
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "func-style": ["error", "expression"],
    "arrow-body-style": ["error", "always"],

    "no-undef": ["error"],
    "no-var": "error",

    // sort
    "import/newline-after-import": "error",
    "import-access/jsdoc": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-destructure-keys/sort-destructure-keys": 2,

    // react
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: false,
        checkInlineFunction: true,
      },
    ],
    "react/destructuring-assignment": ["error", "always"],
    "react/prop-types": "off",

    "@typescript-eslint/naming-convention": [
      "error",
      { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
      { selector: ["classProperty", "method"], format: ["camelCase"] },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "has", "should"],
      },
    ],
  },

  overrides: [],

  ignorePatterns: [".eslintrc.*"],
}
