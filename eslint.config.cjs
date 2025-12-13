const js = require("@eslint/js");
const prettier = require("eslint-plugin-prettier");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = [
  {
    ignores: [
      ".next",
      "dist",
      "node_modules",
      "coverage",
      "next.config.*",
      "*.config.*"
    ]
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,

      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          semi: true
        }
      ],

      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0
        }
      ]
    }
  }
];
