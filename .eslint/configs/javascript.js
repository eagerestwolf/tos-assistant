import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

import { baseRules } from "../rules/base.js";
import { javascriptRules } from "../rules/javascript.js";
import { reactRules } from "../rules/react.js";
import { globs } from "../utils/globs.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const javascriptConfig = {
  files: [...globs.sources.javascript],
  ignores: [...globs.ignores.base],
  plugins: {
    "jsx-a11y": jsxA11y,
    react,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh
  },
  rules: {
    ...javascriptRules,
    ...baseRules,
    ...reactRules
  }
};
