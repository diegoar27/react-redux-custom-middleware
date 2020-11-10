module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'react-app'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'react',
    'import',
    'jest',
    'react-hooks'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    }
  },
};
