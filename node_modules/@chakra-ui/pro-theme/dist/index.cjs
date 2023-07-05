'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const index$1 = require('./components/index.cjs');
const index = require('./foundations/index.cjs');

const theme = {
  ...index,
  components: { ...index$1 }
};

exports.theme = theme;
