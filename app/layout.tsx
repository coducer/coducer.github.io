import { Providers } from "@/components/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: "100 Days of MVP | Accelerate MVP building journey in 100 days",
  description: "Extended tech team. From idea to MVP in 100 days. Support you anything and everything tech, web, mobile dev, rapid prototyping, AI/ML model, blockchain and more.",

};

const sora = Sora({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WPWZR47RGN"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WPWZR47RGN');
        `}
      </Script>
    </html>
  );
}
