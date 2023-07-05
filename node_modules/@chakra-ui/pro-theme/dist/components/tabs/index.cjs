'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const anatomy = require('@chakra-ui/anatomy');
const styledSystem = require('@chakra-ui/styled-system');
const indicator_variant = require('./indicator.variant.cjs');
const underline_variant = require('./underline.variant.cjs');

const { defineMultiStyleConfig } = styledSystem.createMultiStyleConfigHelpers(anatomy.tabsAnatomy.keys);
const index = defineMultiStyleConfig({
  variants: {
    underline: underline_variant.underline,
    indicator: indicator_variant.indicator
  },
  defaultProps: {
    colorScheme: "brand",
    size: "md"
  }
});

exports.default = index;
