module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended'
  ],

  overrides: [],

  ignorePatterns: ['vite.config.js'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },

  plugins: ['react', '@typescript-eslint', 'prettier'],

  rules: {
    // Правила для JSX Accessibility
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    // Правила для TypeScript
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',

    // Правила для React
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      'off',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',

    // Общие правила
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'import/no-cycle': 'warn',
    'import/prefer-default-export': 'off',
  }

};
