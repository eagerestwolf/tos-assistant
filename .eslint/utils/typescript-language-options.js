import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";

export function typescriptLanguageOptions(project, isReact = false, isVite = false) {
  return {
    globals: {
      ...(isVite && globals.node),
      ...(isReact && globals.browser),
      ...(isReact && globals.serviceworker)
    },
    parser: typescriptParser,
    parserOptions: {
      ecmaFeatures: {
        jsx: isReact,
        modules: true
      },
      ecmaVersion: "latest",
      project
    }
  };
}
