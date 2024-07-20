// @ts-check

/**
 * To use this configuration, you need to install the following dependencies:
 *
 * eslint@^8.57.0 @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-unicorn eslint-plugin-unused-imports@^3.2.0 prettier eslint-config-prettier eslint-plugin-prettier @ianvs/prettier-plugin-sort-imports prettier-plugin-tailwindcss
 *
 *
 * To Replicate the vitest configuration, you need to install the following dependencies:
 *
 * eslint-plugin-vitest@^0.4.1 eslint-testing-library
 *
 * Also replicate the .prettierrc.cjs file in the root of your project.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "plugin:vitest/all",
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
    "plugin:testing-library/react",
  ],
  ignorePatterns: ["dist", "node_modules"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "unicorn",
    "unused-imports",
    "vitest",
    "testing-library",
  ],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "unicorn/filename-case": [
      "error",
      { cases: { kebabCase: true, pascalCase: true, camelCase: true } },
    ],
  },
  settings: {
    react: { version: "detect" },
    vitest: { typecheck: true },
  },
  overrides: [
    {
      files: [".eslintrc.*js", ".vite(|st).(js|ts)"],
      env: { node: true },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "unicorn/prevent-abbreviations": "off",
      },
    },
    {
      files: ["!*.test.(js|jsx|ts|tsx)"],
      rules: {
        "vitest/require-hook": "off",
        "testing-library/no-node-access": [
          "error",
          { allowContainerFirstChild: true },
        ],
      },
    },
  ],
};
