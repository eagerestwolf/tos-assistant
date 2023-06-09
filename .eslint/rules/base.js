export const baseRules = {
  "array-callback-return": [
    "error",
    {
      checkForEach: true
    }
  ],
  "block-scoped-var": "error",
  "class-methods-use-this": "warn",
  "consistent-return": "error",
  "consistent-this": ["error", "self"],
  "default-case": "error",
  "default-case-last": "error",
  eqeqeq: "error",
  "func-name-matching": "error",
  "func-names": ["error", "always"],
  "func-style": [
    "error",
    "declaration",
    {
      allowArrowFunctions: true
    }
  ],
  "grouped-accessor-pairs": ["error", "getBeforeSet"],
  "guard-for-in": "error",
  "max-classes-per-file": "error",
  "max-statements-per-line": "error",
  "multiline-comment-style": ["error", "starred-block"],
  "new-cap": "error",
  "no-alert": "error",
  "no-array-constructor": "error",
  "no-await-in-loop": "error",
  "no-caller": "error",
  "no-console": "warn",
  "no-constructor-return": "error",
  "no-continue": "warn",
  "no-else-return": "error",
  "no-empty-function": "warn",
  "no-eq-null": "warn",
  "no-eval": "error",
  "no-extend-native": "error",
  "no-extra-bind": "warn",
  "no-implicit-coercion": [
    "error",
    {
      disallowTemplateShorthand: true
    }
  ],
  "no-implicit-globals": "warn",
  "no-implied-eval": "error",
  "no-iterator": "error",
  "no-labels": "error",
  "no-lone-blocks": "error",
  "no-mixed-operators": "warn",
  "no-multi-assign": "error",
  "no-multi-str": "warn",
  "no-nested-ternary": "error",
  "no-new": "warn",
  "no-new-func": "error",
  "no-new-object": "error",
  "no-new-wrappers": "error",
  "no-octal-escape": "warn",
  "no-param-reassign": "warn",
  "no-promise-executor-return": "error",
  "no-proto": "error",
  "no-return-assign": "error",
  "no-return-await": "error",
  "no-script-url": "error",
  "no-sequences": "error",
  "no-template-curly-in-string": "warn",
  "no-undef-init": "warn",
  "no-undefined": "warn",
  "no-underscore-dangle": "error",
  "no-unmodified-loop-condition": "error",
  "no-unneeded-ternary": "warn",
  "no-unreachable-loop": "error",
  "no-useless-call": "warn",
  "no-useless-computed-key": "error",
  "no-useless-concat": "error",
  "no-useless-rename": "error",
  "no-useless-return": "error",
  "no-var": "error",
  "no-void": "error",
  "object-shorthand": [
    "error",
    "always",
    {
      avoidExplicitReturnArrows: true,
      avoidQuotes: true,
      ignoreConstructors: true
    }
  ],
  "one-var": ["error", "never"],
  "operator-assignment": ["warn", "never"],
  "prefer-const": "error",
  "prefer-destructuring": "warn",
  "prefer-exponentiation-operator": "warn",
  "prefer-object-spread": "warn",
  "prefer-promise-reject-errors": "error",
  "prefer-regex-literals": "error",
  "prefer-rest-params": "error",
  "prefer-template": "error",
  "require-atomic-updates": "warn",
  "require-await": "error",
  "sort-keys": "error",
  "sort-vars": "error",
  "spaced-comment": "error",
  strict: "off",
  "vars-on-top": "error"
};
