module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  ignorePatterns: [
    '/client/build'
  ],
  rules: {
    semi: [2, 'always']
  }
};
