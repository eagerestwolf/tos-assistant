import { baseConfig } from "./.eslint/configs/base.js";
import { javascriptConfig } from "./.eslint/configs/javascript.js";
import { typescriptConfig } from "./.eslint/configs/typescript.js";
import { typescriptReactConfig } from "./.eslint/configs/typescript-react.js";
import { viteConfig } from "./.eslint/configs/vite.js";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [baseConfig, javascriptConfig, typescriptConfig, typescriptReactConfig, viteConfig];
