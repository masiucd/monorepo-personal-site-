module.exports = {
  extends: ["next", "turbo", "prettier", "plugin:react-hooks/recommended"],
  plugins: ["prettier", "unused-imports"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "prettier/prettier": ["error"],
    "prefer-const": "error",
    "no-irregular-whitespace": "error",
    "no-trailing-spaces": "error",
    "no-duplicate-imports": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-unused-vars": "error",
    "unused-imports/no-unused-imports": "error",
    semi: ["error", "never"],
    "import/order": [
      "error",
      {
        groups: [
          "index",
          "sibling",
          "parent",
          "internal",
          "external",
          "builtin",
          "object",
          "type",
        ],
      },
    ],
  },
}
