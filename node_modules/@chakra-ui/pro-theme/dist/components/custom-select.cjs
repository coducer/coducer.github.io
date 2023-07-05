'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const themeTools = require('@chakra-ui/theme-tools');

const parts = ["field", "menu", "option"];
const baseStyle = {
  field: {
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 50ms ease"
  },
  option: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  },
  menu: {
    minW: "3xs"
  }
};
const variants = {
  outline: (props) => ({
    menu: {
      bg: themeTools.mode("white", "gray.800")(props),
      boxShadow: "sm",
      color: "inherit",
      minW: "3xs",
      py: "2",
      borderRadius: "md",
      borderWidth: "1px"
    },
    option: {
      _selected: {
        bg: themeTools.mode("gray.100", "gray.700")(props)
      }
    },
    field: {
      borderWidth: "1px",
      bg: themeTools.mode("white", "gray.800")(props),
      _hover: {
        borderColor: themeTools.mode("gray.300", "whiteAlpha.400")(props)
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
        borderColor: "inherit"
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: themeTools.getColor(props.theme, themeTools.mode("red.500", "red.300")(props)),
        boxShadow: `0 0 0 1px ${themeTools.getColor(props.theme, themeTools.mode("red.500", "red.300")(props))}`
      },
      _focus: {
        borderColor: themeTools.mode("brand.500", "brand.200")(props),
        boxShadow: themeTools.mode(
          `0px 0px 0px 1px ${themeTools.transparentize(`brand.500`, 1)(props.theme)}`,
          `0px 0px 0px 1px ${themeTools.transparentize(`brand.200`, 1)(props.theme)}`
        )(props)
      },
      _expanded: {
        borderColor: themeTools.mode("brand.500", "brand.200")(props),
        boxShadow: themeTools.mode(
          `0px 0px 0px 1px ${themeTools.transparentize(`brand.500`, 1)(props.theme)}`,
          `0px 0px 0px 1px ${themeTools.transparentize(`brand.200`, 1)(props.theme)}`
        )(props)
      }
    }
  })
};
const sizes = {
  sm: {
    field: {
      px: 3,
      h: 8,
      fontSize: "sm",
      borderRadius: "sm"
    },
    menu: {
      fontSize: "sm",
      borderRadius: "sm"
    },
    option: {
      px: 3,
      h: 8,
      fontSize: "sm"
    }
  },
  md: {
    field: {
      px: 4,
      h: 10,
      fontSize: "md",
      borderRadius: "md"
    },
    menu: {
      fontSize: "md",
      borderRadius: "md"
    },
    option: {
      px: 4,
      h: 10,
      fontSize: "md"
    }
  },
  lg: {
    field: {
      px: 4,
      h: 12,
      fontSize: "lg",
      borderRadius: "md"
    },
    menu: {
      fontSize: "lg",
      borderRadius: "md"
    },
    option: {
      px: 4,
      h: 12,
      fontSize: "lg"
    }
  }
};
const customSelect = {
  parts,
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: "md",
    variant: "outline",
    colorScheme: "brand"
  }
};

exports.default = customSelect;
