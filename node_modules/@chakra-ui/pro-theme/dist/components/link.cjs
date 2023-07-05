'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const styledSystem = require('@chakra-ui/styled-system');

const vars = styledSystem.defineCssVars("link", ["color"]);
const link = styledSystem.defineStyleConfig({
  variants: {
    underline: styledSystem.defineStyle({
      position: "relative",
      color: vars.color.reference,
      [vars.color.variable]: `colors.brand.600`,
      _dark: {
        [vars.color.variable]: `colors.brand.200`
      },
      _before: {
        content: '""',
        position: "absolute",
        width: "full",
        height: "1.5px",
        borderRadius: "sm",
        backgroundColor: "accent",
        bottom: "0",
        left: "0",
        transformOrigin: "right",
        transform: "scaleX(0)",
        transition: " transform .20s ease-in-out"
      },
      _hover: {
        textDecoration: "none",
        _before: {
          transformOrigin: "left",
          transform: "scaleX(1)"
        }
      }
    }),
    menu: styledSystem.defineStyle({
      borderRadius: "lg",
      _hover: {
        textDecoration: "none",
        bg: "bg.subtle"
      }
    })
  },
  defaultProps: {
    variant: "underline"
  }
});

exports.default = link;
