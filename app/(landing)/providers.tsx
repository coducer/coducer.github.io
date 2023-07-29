"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import 'bootstrap/dist/css/bootstrap.min.css';


import "@fontsource-variable/open-sans";
import "@fontsource-variable/spline-sans";



export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      {children}
    </CacheProvider>
  );
}
