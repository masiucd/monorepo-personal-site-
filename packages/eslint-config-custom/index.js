module.exports = {
  extends: ["next", "turbo", "prettier", "plugin:react-hooks/recommended"],
  plugins: ["simple-import-sort", "prettier", "unused-imports"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prettier/prettier": ["error"],
    "prefer-const": "error",
    "no-irregular-whitespace": "error",
    "no-trailing-spaces": "error",
    "no-duplicate-imports": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "unused-imports/no-unused-imports": "error",
    semi: ["error", "never"],
  },
}
