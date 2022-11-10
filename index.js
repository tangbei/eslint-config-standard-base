module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/import.js',
    './rules/errors.js',
    './rules/es6.js',
    './rules/node.js',
    './rules/style.js',
    './rules/strict.js',
    './rules/variables.js'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
