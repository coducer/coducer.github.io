import { Providers } from "./(landing)/providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "100 days of mvp",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
