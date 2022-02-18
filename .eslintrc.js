const order = [
  'el',
  'name',
  'parent',
  'functional',
  ['delimiters', 'comments'],
  ['template', 'render'],
  'head',
  'renderError',
  ['components', 'directives', 'filters'],
  'extends',
  'mixins',
  'inheritAttrs',
  'model',
  ['props', 'propsData'],
  'fetch',

  'emits', // Vue 3
  'setup', // Vue 3

  'asyncData',
  'data',
  'computed',
  'watch',
  'LIFECYCLE_HOOKS',
  'methods',
];

module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },

  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
  },

  extends: [
    'plugin:compat/recommended',
    'plugin:jsdoc/recommended',
    'plugin:promise/recommended',
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],

  plugins: [
    'compat',
    'jest',
    'jsdoc',
    'promise',
    'vue',
  ],

  /**
   * https://eslint.org/docs/user-guide/configuring/rules#configuring-rules
   * "off" or 0 - turn the rule off
   * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
   * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
   */
  rules: {
    'max-len': 0,
    'prefer-const': 2,
    'prefer-template': 2,
    'space-before-function-paren': [2, {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always',
    }],

    'vue/component-name-in-template-casing': [2, 'PascalCase', {
      registeredComponentsOnly: true,
      ignores: [],
    }],
    'vue/first-attribute-linebreak': [2, { singleline: 'beside' }],
    'vue/html-self-closing': [2, {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/max-len': 0,
    'vue/order-in-components': [2, { order }],
    'vue/prefer-template': 2,

    'jsdoc/require-jsdoc': 0,
    'jsdoc/require-param-description': 0,
    'jsdoc/require-property-description': 0,
    'jsdoc/require-returns-description': 0,
  },
};
