export const globs = {
  configs: {
    vite: ["**/vite.config.ts"]
  },
  ignores: {
    base: [
      "**/node_modules/**",
      ".git/**",
      "**/dist/**",
      "**/build/**",
      "**/artifacts/**",
      "**/coverage/**"
    ],
    tauri: ["**/src-tauri/**"],
    typescript: ["**/*.d.ts"]
  },
  sources: {
    javascript: ["**/*.?(c|m)js?(x)"],
    react: {
      javascript: ["**/*.?(c|m)jsx"],
      typescript: ["**/*.tsx"]
    },
    typescript: ["**/*.ts?(x)"]
  }
};
