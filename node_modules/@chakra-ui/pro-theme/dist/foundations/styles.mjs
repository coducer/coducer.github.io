import { defineStyle } from '@chakra-ui/styled-system';

const styles = {
  global: defineStyle({
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

export { styles as default };
