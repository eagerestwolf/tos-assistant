import prettierConfig from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";

/** @type {import("eslint").Linter.FlatConfig} */
export const baseConfig = {
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  linterOptions: {
    noInlineConfig: true,
    reportUnusedDisableDirectives: true
  },
  plugins: { prettier },
  rules: {
    ...prettierConfig.rules,
    "prettier/prettier": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
