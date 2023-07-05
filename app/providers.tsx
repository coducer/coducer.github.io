"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import {
  ChakraProvider,
  extendTheme,
  theme as baseTheme,
} from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      ...baseTheme.colors,
      brand: { ...baseTheme.colors.teal },
    },
  },
  proTheme
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
