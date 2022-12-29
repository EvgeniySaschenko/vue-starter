let isProduction = process.env.NODE_ENV === "production";

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": isProduction ? "warn" : "off",
    "no-debugger": isProduction ? "warn" : "off",
    "prefer-const": "off",
    "no-unused-vars": "warn",
    "unicorn/error-message": "off",
    "@typescript-eslint/no-var-requires": "off",
    eqeqeq: "warn",
    "no-var": "error",
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
