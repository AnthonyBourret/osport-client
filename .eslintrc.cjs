module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb-typescript",
    // react-hooks = List of rules present in : https://legacy.reactjs.org/docs/hooks-rules.html
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`
  },
  plugins: ["react-refresh", "react-hooks"],
  rules: {
    "@typescript-eslint/indent": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx"] }],
    "no-console": "off",
    'react/function-component-definition': 'off',
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],

    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],

    "react/no-unescaped-entities": 0
  }
};
