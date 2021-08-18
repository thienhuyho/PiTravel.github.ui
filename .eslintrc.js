module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'no-else-return': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-empty-pattern': 'off',
    'global-require': 'off',
    'react/jsx-curly-brace-presence': 'off',
  },
}
