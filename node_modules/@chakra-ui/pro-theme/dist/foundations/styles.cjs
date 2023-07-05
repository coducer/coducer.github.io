'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const styledSystem = require('@chakra-ui/styled-system');

const styles = {
  global: styledSystem.defineStyle({
    body: {
      color: "fg.default",
      bg: "bg.canvas"
    },
    "*::placeholder": {
      opacity: 1,
      color: "fg.muted"
    },
    "*, *::before, &::after": {
      borderColor: "border.default"
    },
    "html,body": {
      height: "100%"
    },
    "#__next, #root": {
      display: "flex",
      flexDirection: "column",
      minH: "100%"
    }
  })
};

exports.default = styles;
