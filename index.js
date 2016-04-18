'use strict';

module.exports = {
  extends: ['xo-space', 'xo-space/esnext', 'xo-react/space'],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    '__CLIENT__': true,
    '__PRODUCTION__': true
  },
  rules: {
    'react/jsx-closing-bracket-location': [0, 0],
    curly: [2, 'multi-line']
  }
};
