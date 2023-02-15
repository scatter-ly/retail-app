/*
 * Copyright 2022 OpenContext Inc.
 *
 */

var path = require('path');

module.exports = require('../config/eslint-factory')(__dirname, {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
    '/dist/**/*',
  ],
  rules: {
    //'quotes': ['error', 'double'],
    //'import/no-unresolved': 0,
    'consistent-return': 'off',
    'spaced-comment': 'off',
    'max-len': [0, 120, 2],
    'no-console': 'off',
    'no-alert': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
  },
});
