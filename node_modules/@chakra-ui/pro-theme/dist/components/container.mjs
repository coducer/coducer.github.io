import { defineStyleConfig } from '@chakra-ui/styled-system';

const container = defineStyleConfig({
  baseStyle: {
    maxW: "7xl",
    px: { base: "4", md: "8" }
  }
});

export { container as default };
