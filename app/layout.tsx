import type { Metadata } from "next";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";

// Set default URL with a reliable fallback
const defaultUrl = process.env.VERCEL_URL?.startsWith("http")
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Simsoft Tech - Intelligent Software Solutions",
    template: "%s - Simsoft Tech | Intelligent Software Solutions",
  },
  description:
    "Simsoft Tech provides scalable, secure, and innovative software solutions. Specializing in web and mobile app development, data science, machine learning, and consultancy services tailored to empower businesses and individuals.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "custom software solutions",
    "web development",
    "mobile app development",
    "data science",
    "machine learning",
    "business systems",
    "workflow automation",
    "predictive analytics",
    "idea incubation",
    "Simsoft Tech",
  ],
  openGraph: {
    title: "Simsoft Tech - Scalable Software Solutions",
    description:
      "At Simsoft Tech, we offer innovative and impactful software solutions tailored to your needs. From idea incubation to scalable development, let us help bring your vision to life.",
    type: "website",
    images: [
      {
        url: `${defaultUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Simsoft Tech - Scalable Software Solutions",
      },
    ],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Metadata for SEO and Site Verification */}
          <meta name="google-adsense-account" content="ca-pub-2409118903033446">
          {/* Google Analytics Setup */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-1Z08WSTH5L"
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-1Z08WSTH5L');
              `,
            }}
          />

          {/* Google Tag Manager Setup */}
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KDKTBT7T');
              `,
            }}
          />
        </head>
        <body>
          {/* Google Tag Manager (noscript fallback) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KDKTBT7T"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Layout>{children}</Layout>
        </body>
      </html>
    </ClerkProvider>
  );
}
