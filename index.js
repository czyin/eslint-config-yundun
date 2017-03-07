module.exports = {
  rules: {

    /********************************************************************************
     CORE: Possible Errors
    ********************************************************************************/
    'no-console': 'off', // 关闭console的输出检查

    /********************************************************************************
     CORE: Best Practices
    ********************************************************************************/
    'array-callback-return': 'error',

    'no-useless-escape': 'error',

    'wrap-iife': ['error', 'outside', {
      functionPrototypeMethods: false
    }],

    'no-loop-func': 'error',

    'no-new-func': 'error',

    'no-param-reassign': ['error', {
      props: true
    }],

    'no-iterator': 'error',

    'dot-notation': ['error', {
      allowKeywords: true
    }],

    eqeqeq: ['error', 'always', {
      null: 'ignore'
    }],

    'no-case-declarations': 'error',

    radix: 'error',

    /********************************************************************************
     CORE: Strict Mode
    ********************************************************************************/

    'strict': 'off',

    /********************************************************************************
     CORE: Variables
    ********************************************************************************/

    // 'no-use-before-define': ['error', {
    //   functions: true,
    //   classes: true,
    //   variables: true
    // }],
    'no-use-before-define': ['error', { // 禁止定义前使用
      'functions': false,
      'classes': false
    }],

    'no-undef': 'error',

    /********************************************************************************
     CORE: Node.js and CommonJS
    ********************************************************************************/
    'global-require': ['off'], // 强制在模块顶部调用 require()

    /********************************************************************************
     CORE: Stylistic Issues
    ********************************************************************************/

    'no-new-object': 'error',

    'no-array-constructor': 'error',

    'quote-props': ['error', 'as-needed', {
      keywords: false,
      unnecessary: true,
      numbers: false
    }],

    quotes: ['error', 'single', {
      avoidEscape: true
    }],

    'func-style': ['error', 'declaration'],

    // 'space-before-function-paren': ['error', {
    //   anonymous: 'always',
    //   named: 'never',
    //   asyncArrow: 'always'
    // }],
    'space-before-function-paren': ['error', { // 要求或禁止函数圆括号之前有一个空格
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],

    'space-before-blocks': 'error',

    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],

    'one-var': ['error', 'never'],

    // 'no-plusplus': 'error',
    'no-plusplus': 'off', // 关闭++的写法校验

    'no-nested-ternary': 'error',

    'no-unneeded-ternary': ['error', {
      defaultAssignment: false
    }],

    'brace-style': ['error', '1tbs', {
      allowSingleLine: true
    }],

    // 'spaced-comment': ['error', 'always', {
    //   line: {
    //     exceptions: ['-', '+'],
    //     markers: ['=', '!'],
    //   },
    //   block: {
    //     exceptions: ['-', '+'],
    //     markers: ['=', '!'],
    //     balanced: false,
    //   }
    // }],

    // indent: ['error', 2, {
    //   SwitchCase: 1,
    //   VariableDeclarator: 1,
    //   outerIIFEBody: 1,
    //   FunctionDeclaration: {
    //     parameters: 1,
    //     body: 1
    //   },
    //   FunctionExpression: {
    //     parameters: 1,
    //     body: 1
    //   }
    // }],
    'indent': ['off'],

    'space-before-blocks': 'error',

    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: {
          after: true
        },
        throw: {
          after: true
        },
        case: {
          after: true
        }
      }
    }],

    'space-infix-ops': 'error',

    'eol-last': ['error', 'always'],

    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 4
    }],

    'no-whitespace-before-property': 'error',

    'padded-blocks': ['error', 'never'],

    'space-in-parens': ['error', 'never'],

    'array-bracket-spacing': ['error', 'never'],

    'object-curly-spacing': ['error', 'always'],

    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    'comma-style': ['error', 'last'],

    // 'comma-dangle': ['error', {
    //   arrays: 'always-multiline',
    //   objects: 'always-multiline',
    //   imports: 'always-multiline',
    //   exports: 'always-multiline',
    //   functions: 'always-multiline',
    // }],
    'comma-dangle': ['error', 'never'], // 要求或禁止使用拖尾逗号

    // semi: ['error', 'always'],
    'semi': ['error', 'never'], // 要求或禁止使用分号代替 ASI

    camelcase: ['error', {
      properties: 'never'
    }],

    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    'no-underscore-dangle': ['error', {
      allowAfterThis: false
    }],

    /********************************************************************************
     CORE: ECMAScript 6
    ********************************************************************************/
    'no-var': 'error',

    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],

    'object-shorthand': ['error', 'always', {
      'ignoreConstructors': false,
      'avoidQuotes': true,
    }],

    // 'prefer-template': 'error',
    'prefer-template': 'off',

    'template-curly-spacing': 'error',

    'prefer-rest-params': 'error',

    'prefer-spread': 'error',

    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],

    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],

    'arrow-parens': ['error', 'as-needed', {
      // requireForBlockBody: true,
    }],

    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    'no-useless-constructor': 'error',

    'no-dupe-class-members': 'error',

    'no-duplicate-imports': 'off',

    'generator-star-spacing': ['error', {
      before: false,
      after: true
    }],

    /********************************************************************************
     PLUGIN: eslint-plugin-import
    ********************************************************************************/
    'import/no-mutable-exports': 'error',

    'import/prefer-default-export': 'error',

    // 'import/first': ['error', 'absolute-first'],
    'import/first': ['off'],

    'import/no-webpack-loader-syntax': 'error',

    'import/no-dynamic-require': ['off'],

    'import/extensions': ['error', 'always', { //don't require .vue extension when importing
      'js': 'never',
      'vue': 'never'
    }]
  }
}
