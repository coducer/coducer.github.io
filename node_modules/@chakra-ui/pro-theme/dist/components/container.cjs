'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const styledSystem = require('@chakra-ui/styled-system');

const container = styledSystem.defineStyleConfig({
  baseStyle: {
    maxW: "7xl",
    px: { base: "4", md: "8" }
  }
});

exports.default = container;
