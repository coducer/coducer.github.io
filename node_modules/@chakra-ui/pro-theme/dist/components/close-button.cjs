'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const styledSystem = require('@chakra-ui/styled-system');

const vars = styledSystem.defineCssVars("close-button", ["bg", "color", "size"]);
const baseStyle = styledSystem.defineStyle({
  borderRadius: "lg",
  w: [vars.size.reference],
  h: [vars.size.reference],
  bg: vars.bg.reference,
  color: vars.color.reference,
  [vars.color.variable]: `colors.gray.600`,
  _dark: {
    [vars.color.variable]: `colors.gray.300`
  },
  _hover: {
    [vars.bg.variable]: `colors.gray.50`,
    [vars.color.variable]: `colors.gray.800`,
    _dark: {
      [vars.bg.variable]: `colors.gray.800`,
      [vars.color.variable]: `colors.white`
    }
  },
  _active: {
    [vars.bg.variable]: `colors.gray.50`,
    [vars.color.variable]: `colors.gray.900`,
    _dark: {
      [vars.bg.variable]: `colors.gray.800`,
      [vars.color.variable]: `colors.white`
    }
  },
  _focusVisible: {
    boxShadow: "focus"
  }
});
const sizes = {
  "2xs": styledSystem.defineStyle({
    [vars.size.variable]: "sizes.6",
    fontSize: "xs"
  }),
  xs: styledSystem.defineStyle({
    [vars.size.variable]: "sizes.8",
    fontSize: "sm"
  }),
  sm: styledSystem.defineStyle({
    [vars.size.variable]: "sizes.9",
    fontSize: "md"
  }),
  md: styledSystem.defineStyle({
    [vars.size.variable]: "sizes.10",
    fontSize: "md"
  }),
  lg: styledSystem.defineStyle({
    [vars.size.variable]: "sizes.11",
    fontSize: "md"
  }),
  xl: styledSystem.defineStyle({
    [vars.size.variable]: "sizes.12",
    fontSize: "lg"
  }),
  "2xl": styledSystem.defineStyle({
    [vars.size.variable]: "sizes.15",
    fontSize: "xl"
  })
};
const closeButton = styledSystem.defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md"
  }
});

exports.default = closeButton;
