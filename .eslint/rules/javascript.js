import js from "@eslint/js";

export const javascriptRules = {
  ...js.configs.recommended.rules,
  camelcase: "error",
  "default-param-last": "error",
  "dot-notation": "error",
  "no-invalid-this": "error",
  "no-loop-func": "warn",
  "no-magic-numbers": "off",
  "no-shadow": "warn",
  "no-throw-literal": "error",
  "no-useless-constructor": "error",
  "padding-line-between-statements": [
    "error",
    {
      blankLine: "always",
      next: [
        "block-like",
        "block",
        "break",
        "class",
        "continue",
        "do",
        "for",
        "function",
        "return",
        "switch",
        "throw",
        "try",
        "while",
        "with"
      ],
      prev: "*"
    },
    {
      blankLine: "always",
      next: "*",
      prev: [
        "block-like",
        "block",
        "class",
        "directive",
        "do",
        "for",
        "function",
        "switch",
        "try",
        "while",
        "with"
      ]
    },
    {
      blankLine: "always",
      next: "*",
      prev: ["const", "let"]
    },
    {
      blankLine: "any",
      next: ["const", "let"],
      prev: ["const", "let"]
    }
  ]
};
