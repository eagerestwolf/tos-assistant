import typescript from "@typescript-eslint/eslint-plugin";

import { globs } from "../utils/globs.js";
import { typescriptLanguageOptions } from "../utils/typescript-language-options.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const typescriptReactConfig = {
  /*
   * React (TypeScript) config
   *
   * All this config really does is override the naming convention rules to conform to React
   * standards.
   */
  files: [...globs.sources.react.typescript],
  ignores: [...globs.ignores.base, ...globs.ignores.typescript, ...globs.configs.vite],
  languageOptions: typescriptLanguageOptions("./tsconfig.json", true),
  plugins: {
    "@typescript-eslint": typescript
  },
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: null,
        leadingUnderscore: "require",
        modifiers: ["unused"],
        selector: ["parameter"]
      },
      // React components must be PascalCase, even functional ones
      {
        format: ["StrictPascalCase"],
        leadingUnderscore: "forbid",
        modifiers: ["exported"],
        selector: ["function"],
        trailingUnderscore: "forbid"
      },
      {
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "forbid",
        modifiers: ["const"],
        selector: "variable",
        trailingUnderscore: "forbid",
        types: ["boolean", "string", "number"]
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
