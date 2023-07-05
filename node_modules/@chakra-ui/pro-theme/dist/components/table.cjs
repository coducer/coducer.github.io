'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const themeTools = require('@chakra-ui/theme-tools');

const baseStyle = {
  table: {
    bg: "bg.surface",
    whiteSpace: "nowrap"
  },
  th: {
    fontWeight: "medium",
    textTransform: "normal",
    letterSpacing: "normal",
    borderTopWidth: "1px",
    whiteSpace: "nowrap"
  }
};
const variants = {
  simple: (props) => ({
    th: {
      color: "fg.muted",
      bg: themeTools.mode("gray.50", themeTools.transparentize("gray.700", 0.4)(props.theme))(props)
    }
  }),
  striped: (props) => ({
    th: {
      color: "fg.muted",
      borderBottomWidth: "0px"
    },
    thead: {
      "th,td": {
        borderWidth: "0px"
      }
    },
    tbody: {
      tr: {
        "th,td": {
          borderWidth: "0px"
        },
        "&:last-of-type": {
          "th, td": {
            borderBottomWidth: "1px"
          }
        },
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "0px"
          },
          td: {
            bg: themeTools.mode("gray.50", themeTools.transparentize("gray.700", 0.4)(props.theme))(props)
          }
        }
      }
    }
  })
};
const sizes = {
  md: {
    th: {
      lineHeight: "1.25rem"
    },
    td: {
      fontSize: "sm"
    }
  }
};
const table = {
  sizes,
  baseStyle,
  variants
};

exports.default = table;
