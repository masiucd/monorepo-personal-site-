module.exports = {
  extends: [
    "next",
    "turbo",
    "prettier",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["prettier", "simple-import-sort"],
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
    semi: ["error", "never"],
    "import/no-cycle": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
}
