import { Providers } from "@/components/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: "100 Days of MVP | Accelerate MVP building journey in 100 days",
  description: "Extended tech team. From idea to MVP in 100 days. Support you anything and everything tech, web, mobile dev, rapid prototyping, AI/ML model, blockchain and more.",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <head><link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" /> </head>
      <body style={{ fontFamily: "'Sora', sans-serif" }}>
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
