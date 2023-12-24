/* eslint-env node */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true
  },

  plugins: ['@typescript-eslint', 'promise', 'jsx-a11y', 'jest', 'react'],
  extends: [
    'eslint:recommended',
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended'
  ],

  settings: {
    'import/resolver': {
      typescript: true,
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },

    react: {
      version: 'detect'
    }
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'import/no-named-as-default-member': 0
  }
}
