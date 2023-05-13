import typescript from "@typescript-eslint/eslint-plugin";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

import { baseRules } from "../rules/base.js";
import { reactRules } from "../rules/react.js";
import { typescriptBaseRules } from "../rules/typescript-base.js";
import { typescriptOverrideRules } from "../rules/typescript-overrides.js";
import { typescriptStrictRules } from "../rules/typescript-strict.js";
import { globs } from "../utils/globs.js";
import { typescriptLanguageOptions } from "../utils/typescript-language-options.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const typescriptConfig = {
  files: [...globs.sources.typescript],
  ignores: [...globs.ignores.base, ...globs.ignores.typescript, ...globs.configs.vite],
  languageOptions: typescriptLanguageOptions("./tsconfig.json", true),
  plugins: {
    "@typescript-eslint": typescript,
    "jsx-a11y": jsxA11y,
    react,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh
  },
  rules: {
    // Override any problematic ESLint rules
    ...typescriptOverrideRules,

    ...baseRules,
    ...typescriptBaseRules,
    ...typescriptStrictRules,
    ...reactRules,

    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: null,
        leadingUnderscore: "require",
        modifiers: ["unused"],
        selector: ["parameter"]
      },
      {
        format: null,
        leadingUnderscore: "allowSingleOrDouble",
        selector: "objectLiteralProperty",
        trailingUnderscore: "forbid"
      },
      {
        format: ["PascalCase"],
        leadingUnderscore: "forbid",
        selector: "typeLike",
        trailingUnderscore: "forbid"
      },
      // https://typescript-eslint.io/rules/naming-convention/#enforce-that-boolean-variables-are-prefixed-with-an-allowed-verb
      {
        format: ["camelCase"],
        leadingUnderscore: "forbid",
        prefix: ["is", "has", "should", "can"],
        selector: "variable",
        trailingUnderscore: "forbid",
        types: ["boolean"]
      },
      {
        format: null,
        modifiers: ["destructured"],
        selector: "variable"
      },
      {
        format: null,
        selector: "typeProperty"
      }
    ]
  }
};
