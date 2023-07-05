'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const baseStyle = {
  color: "fg.emphasized",
  mb: "1.5",
  fontSize: "sm"
};
const sizes = {
  sm: {
    _peerPlaceholderShown: {
      fontSize: "sm",
      top: "1.5",
      left: "4"
    }
  },
  md: {
    _peerPlaceholderShown: {
      fontSize: "md",
      top: "2",
      left: "4"
    }
  },
  lg: {
    _peerPlaceholderShown: {
      fontSize: "lg",
      top: "2.5",
      left: "4"
    }
  }
};
const variants = {
  inline: () => ({
    margin: 0,
    minW: "2xs"
  }),
  floating: () => ({
    position: "absolute",
    transition: "all 0.12s ease-in",
    pointerEvents: "none",
    top: "-27px",
    left: "0",
    _peerPlaceholderShown: {
      fontWeight: "normal",
      color: "fg.subtle"
    },
    _peerFocus: {
      fontSize: "sm",
      fontWeight: "medium",
      top: "-27px",
      left: "0",
      color: "fg.muted"
    }
  })
};
const defaultProps = {
  size: "md"
};
const formLabel = {
  baseStyle,
  sizes,
  variants,
  defaultProps
};

exports.default = formLabel;
