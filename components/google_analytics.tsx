'use client'
import Script from "next/script"

export const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {
    <>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-WPWZR47RGN" strategy="afterInteractive" />

        <Script id="google-analytics" strategy="afterInteractive">
            {
                {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config',"${G - WPWZR47RGN}");
        }
        </Script>
    }
    </>
}