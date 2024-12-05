const js = require('@eslint/js')
const globals = require('globals')
const reactPlugin = require('eslint-plugin-react')
const jestPlugin = require('eslint-plugin-jest')

module.exports = [
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  jestPlugin.configs['flat/recommended'],
  {
    plugins: {
      jest: jestPlugin,
      react: reactPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node
      },
      parserOptions: {
        parser: "@babel/eslint-parser",
        babelOptions: {
          presets: ["@babel/preset-react"]
        },
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2020,
        requireConfigFile: false
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
      "no-var": "error", // optional, recommended when using es6+
      "no-unused-vars": 1, // recommended
      "arrow-spacing": ["error", { before: true, after: true }], // recommended
      indent: ["error", 2],
      "comma-dangle": [
        "error",
        {
          objects: "only-multiline",
          arrays: "only-multiline",
          imports: "never",
          exports: "never",
          functions: "never",
        },
      ],

      // options to emulate prettier setup
      semi: ["error", "never"],
      "max-len": ["error", { code: 128, ignoreUrls: true }],
      "template-curly-spacing": ["error", "always"],
      "arrow-parens": ["error", "as-needed"],

      // standard.js
      "space-before-function-paren": [
        "error",
        {
          named: "always",
          anonymous: "always",
          asyncArrow: "always",
        },
      ],

      // standard plugin - options
      // "standard/object-curly-even-spacing": ["error", "either"],
      // "standard/array-bracket-even-spacing": ["error", "either"],
      // "standard/computed-property-even-spacing": ["error", "even"],
      // "standard/no-callback-literal": ["error", ["cb", "callback"]],

      // react plugin - options
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off",
    }
  }
]
