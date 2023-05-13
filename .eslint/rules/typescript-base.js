import typescript from "@typescript-eslint/eslint-plugin";

export const typescriptBaseRules = {
  // Bring in recommended rules
  ...typescript.configs["eslint-recommended"].rules,
  ...typescript.configs.recommended.rules,

  // Custom rules
  "@typescript-eslint/array-type": [
    "error",
    {
      default: "array-simple"
    }
  ],
  "@typescript-eslint/ban-ts-comment": "error",
  "@typescript-eslint/ban-types": [
    "warn",
    {
      extendDefaults: false,
      types: {
        Boolean: {
          fixWith: "boolean",
          message: 'Use "boolean" instead'
        },
        Function: {
          message: [
            'The "Function" type accepts any function-like value.',
            "It provides no type safety when calling the function, which can be a common source of bugs.",
            'It also accepts things like class declarations, which will throw at runtime as they will not be called with "new".',
            "If you are expecting the function to accept certain arguments, you should explicitly define the function shape."
          ].join("\n")
        },
        Number: {
          fixWith: "number",
          message: 'Use "number" instead'
        },
        Object: {
          message: 'Use "object" instead, or define a proper TypeScript type'
        },
        String: {
          fixWith: "string",
          message: 'Use "string" instead'
        },
        Symbol: {
          fixWith: "symbol",
          message: 'Use "symbol" instead'
        },
        "{}": {
          message: [
            '"{}" actually means "any non-nullish value".',
            '- If you want a type meaning "any object", you probably want "Record<string, unknown>" instead.',
            '- If you want a type meaning "any value", you probably want "unknown" instead.'
          ].join("\n")
        }
      }
    }
  ],
  "@typescript-eslint/class-literal-property-style": ["error", "getters"],
  "@typescript-eslint/consistent-indexed-object-style": "error",
  "@typescript-eslint/consistent-type-assertions": [
    "error",
    {
      assertionStyle: "as",
      objectLiteralTypeAssertions: "allow-as-parameter"
    }
  ],
  "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
  "@typescript-eslint/consistent-type-exports": "error",
  "@typescript-eslint/consistent-type-imports": [
    "error",
    {
      disallowTypeAnnotations: true,
      prefer: "type-imports"
    }
  ],
  "@typescript-eslint/default-param-last": "error",
  "@typescript-eslint/dot-notation": "error",
  "@typescript-eslint/explicit-member-accessibility": "error",
  "@typescript-eslint/explicit-module-boundary-types": "error",
  "@typescript-eslint/member-ordering": [
    "error",
    {
      default: {
        memberTypes: [
          "signature",
          "call-signature",

          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "#private-static-field",

          "public-decorated-field",
          "protected-decorated-field",
          "private-decorated-field",

          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "#private-instance-field",

          "public-abstract-field",
          "protected-abstract-field",

          "public-field",
          "protected-field",
          "private-field",
          "#private-field",

          "static-field",
          "instance-field",
          "abstract-field",

          "decorated-field",

          "field",

          "static-initialization",

          "public-constructor",
          "protected-constructor",
          "private-constructor",

          "constructor",

          "public-static-get",
          "protected-static-get",
          "private-static-get",
          "#private-static-get",

          "public-decorated-get",
          "protected-decorated-get",
          "private-decorated-get",

          "public-instance-get",
          "protected-instance-get",
          "private-instance-get",
          "#private-instance-get",

          "public-abstract-get",
          "protected-abstract-get",

          "public-get",
          "protected-get",
          "private-get",
          "#private-get",

          "static-get",
          "instance-get",
          "abstract-get",

          "decorated-get",

          "get",

          "public-static-set",
          "protected-static-set",
          "private-static-set",
          "#private-static-set",

          "public-decorated-set",
          "protected-decorated-set",
          "private-decorated-set",

          "public-instance-set",
          "protected-instance-set",
          "private-instance-set",
          "#private-instance-set",

          "public-abstract-set",
          "protected-abstract-set",

          "public-set",
          "protected-set",
          "private-set",
          "#private-set",

          "static-set",
          "instance-set",
          "abstract-set",

          "decorated-set",

          "set",

          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "#private-static-method",

          "public-decorated-method",
          "protected-decorated-method",
          "private-decorated-method",

          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
          "#private-instance-method",

          "public-abstract-method",
          "protected-abstract-method",

          "public-method",
          "protected-method",
          "private-method",
          "#private-method",

          "static-method",
          "instance-method",
          "abstract-method",

          "decorated-method",

          "method"
        ],
        order: "alphabetically-case-insensitive"
      }
    }
  ],
  "@typescript-eslint/method-signature-style": "error",
  "@typescript-eslint/no-base-to-string": "error",
  "@typescript-eslint/no-confusing-non-null-assertion": "error",
  "@typescript-eslint/no-confusing-void-expression": "error",
  "@typescript-eslint/no-dynamic-delete": "error",
  "@typescript-eslint/no-extraneous-class": "error",
  "@typescript-eslint/no-invalid-this": "error",
  "@typescript-eslint/no-invalid-void-type": "error",
  "@typescript-eslint/no-loop-func": "warn",
  "@typescript-eslint/no-magic-numbers": "off",
  "@typescript-eslint/no-meaningless-void-operator": "error",
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
  "@typescript-eslint/no-require-imports": "error",
  "@typescript-eslint/no-shadow": "warn",
  "@typescript-eslint/no-throw-literal": "error",
  "@typescript-eslint/no-type-alias": "error",
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
  "@typescript-eslint/no-unnecessary-qualifier": "error",
  "@typescript-eslint/no-unnecessary-type-arguments": "error",
  "@typescript-eslint/no-useless-constructor": "error",
  "@typescript-eslint/non-nullable-type-assertion-style": "error",
  "@typescript-eslint/padding-line-between-statements": [
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
  ],
  "@typescript-eslint/prefer-for-of": "warn",
  "@typescript-eslint/prefer-includes": "warn",
  "@typescript-eslint/prefer-literal-enum-member": "warn",
  "@typescript-eslint/prefer-optional-chain": "warn",
  "@typescript-eslint/prefer-reduce-type-parameter": "warn",
  "@typescript-eslint/prefer-regexp-exec": "warn",
  "@typescript-eslint/prefer-return-this-type": "warn",
  "@typescript-eslint/prefer-string-starts-ends-with": "warn",
  "@typescript-eslint/prefer-ts-expect-error": "error",
  "@typescript-eslint/promise-function-async": "error",
  "@typescript-eslint/require-array-sort-compare": "error",
  "@typescript-eslint/return-await": "error",
  "@typescript-eslint/switch-exhaustiveness-check": "error",
  "@typescript-eslint/unified-signatures": "error"
};
