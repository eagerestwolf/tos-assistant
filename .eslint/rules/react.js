import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";

export const reactRules = {
  // Shared configs
  ...jsxA11y.configs.recommended.rules,
  ...react.configs.recommended.rules,
  ...react.configs["jsx-runtime"].rules,

  // Custom rules
  "react-hooks/exhaustive-deps": "warn",
  "react-hooks/rules-of-hooks": "error",
  "react-refresh/only-export-components": "warn",
  "react/boolean-prop-naming": "error",
  "react/button-has-type": "error",
  "react/default-props-match-prop-types": "error",
  "react/destructuring-assignment": "warn",
  "react/function-component-definition": [
    "error",
    {
      namedComponents: "function-declaration",
      unnamedComponents: "arrow-function"
    }
  ],
  "react/jsx-boolean-value": ["error", "never"],
  "react/jsx-curly-brace-presence": ["error", "never"],
  "react/jsx-filename-extension": [
    "error",
    {
      allow: "as-needed",
      extensions: [".cjsx", ".jsx", ".mjsx", ".tsx"]
    }
  ],
  "react/jsx-fragments": "error",
  "react/jsx-handler-names": "error",
  "react/jsx-no-bind": [
    "error",
    {
      allowArrowFunctions: true
    }
  ],
  "react/jsx-no-constructed-context-values": "warn",
  "react/jsx-no-script-url": "warn",
  "react/jsx-no-useless-fragment": [
    "error",
    {
      allowExpressions: true
    }
  ],
  "react/jsx-pascal-case": "error",
  "react/jsx-props-no-spreading": "error",
  "react/jsx-sort-props": [
    "error",
    {
      callbacksLast: true,
      reservedFirst: true,
      shorthandFirst: true
    }
  ],
  "react/no-access-state-in-setstate": "error",
  "react/no-adjacent-inline-elements": "warn",
  "react/no-array-index-key": "warn",
  "react/no-arrow-function-lifecycle": "error",
  "react/no-danger": "warn",
  "react/no-deprecated": "error",
  "react/no-did-mount-set-state": "error",
  "react/no-did-update-set-state": "error",
  "react/no-direct-mutation-state": "error",
  "react/no-invalid-html-attribute": "warn",
  "react/no-multi-comp": "error",
  "react/no-namespace": "warn",
  "react/no-redundant-should-component-update": "error",
  "react/no-this-in-sfc": "error",
  "react/no-typos": "warn",
  "react/no-unsafe": [
    "error",
    {
      checkAliases: true
    }
  ],
  "react/no-unstable-nested-components": "error",
  "react/no-unused-class-component-methods": "error",
  "react/no-unused-prop-types": "error",
  "react/no-unused-state": "error",
  "react/no-will-update-set-state": "error",
  "react/prefer-es6-class": ["error", "always"],
  "react/prefer-stateless-function": [
    "error",
    {
      ignorePureComponents: true
    }
  ],
  "react/require-default-props": "error",
  "react/self-closing-comp": "error",
  "react/sort-comp": "error",
  "react/sort-default-props": "error",
  "react/sort-prop-types": [
    "error",
    {
      callbacksLast: true,
      noSortAlphabetically: false,
      requiredFirst: true,
      sortShapeProp: true
    }
  ],
  "react/state-in-constructor": ["error", "always"],
  "react/static-property-placement": "error",
  "react/style-prop-object": "error",
  "react/void-dom-elements-no-children": "error"
};
