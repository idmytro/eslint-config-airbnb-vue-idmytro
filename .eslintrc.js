module.exports = {
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:compat/recommended',
    'plugin:jsdoc/recommended',
    'plugin:promise/recommended',
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  // parserOptions: {
  //   ecmaVersion: 11,
  // },
  plugins: [
    'jest',
    'jsdoc',
    'promise',
    'vue',
  ],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 1 }],
    'max-len': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
        ],
      },
    ],
    'prefer-template': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],

    // https://youtrack.jetbrains.com/issue/WEB-48458
    // https://youtrack.jetbrains.com/issue/WEB-53257
    /*
    vs-code settings.json
    "path-intellisense.extensionOnImport": true
    "path-autocomplete.extensionOnImport": true,

    https://github.com/vuejs/vetur/pull/2930
    https://github.com/vuejs/vetur/commit/4b4f94c486c60112bce59e73288b2f3b41ce96cb
    */
    'import/extensions': ['error', 'always', {
      js: 'never', // ? always
      // vue: 'never',
    }],

    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase', // ? 'kebab-case',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-len': ['error', {
      code: 150,
      template: 150,
      tabWidth: 2,
      comments: 150,
      ignorePattern: '',
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: false,
      ignoreHTMLAttributeValues: true,
      ignoreHTMLTextContents: false,
    }],
    'vue/match-component-file-name': ['error', {
      extensions: ['vue'],
      shouldMatchCase: true,
    }],
    'vue/order-in-components': [
      'error',
      {
        order: [
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
          'methods',
          'LIFECYCLE_HOOKS',
        ],
      },
    ],
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'data', 'computed', 'methods'],
      },
    ],
    'vue/prefer-template': 'error',
  },
};
