import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { indicator } from './indicator.variant.mjs';
import { underline } from './underline.variant.mjs';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys);
const index = defineMultiStyleConfig({
  variants: {
    underline,
    indicator
  },
  defaultProps: {
    colorScheme: "brand",
    size: "md"
  }
});

export { index as default };
