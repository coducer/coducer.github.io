'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const baseStyle = {
  track: {
    borderRadius: "base"
  }
};
const variants = {
  solid: {
    track: {
      bg: "bg.muted"
    }
  },
  "fg.accent.default": {
    track: {
      bg: "transparent"
    },
    filledTrack: {
      bg: "brand.50"
    }
  }
};
const defaultProps = {
  colorScheme: "brand",
  variant: "solid"
};
const progress = {
  variants,
  baseStyle,
  defaultProps
};

exports.default = progress;
