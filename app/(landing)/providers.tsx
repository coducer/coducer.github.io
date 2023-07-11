"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import {
  ChakraProvider,
  theme as baseTheme,
  extendTheme,
} from "@chakra-ui/react";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/spline-sans";

export const theme = extendTheme(
  {
    colors: {
      ...baseTheme.colors,
      yellow: { 600: "#F2D842" },
      brand: { ...baseTheme.colors.blue, 600: "#242c42", 500: "#46588a" },
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
