import typescript from "@typescript-eslint/eslint-plugin";

import { typescriptBaseRules } from "../rules/typescript-base.js";
import { globs } from "../utils/globs.js";
import { typescriptLanguageOptions } from "../utils/typescript-language-options.js";

export const viteConfig = {
  // Vite config
  files: [...globs.configs.vite],
  languageOptions: typescriptLanguageOptions("./tsconfig.node.json", false, true),
  plugins: {
    "@typescript-eslint": typescript
  },
  rules: {
    ...typescriptBaseRules
  }
};
