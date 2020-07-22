module.exports = {
  extends: ['eslint:recommended', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    semi: [2, 'never'],
    'arrow-body-style': ['error', 'always'],
  },
}
