import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Auto Detailing Austin",
    "Ceramic Coating Austin",
    "Paint Protection Film Austin",
    "Window Tinting Austin",
    "Tesla Detailing",
    "Luxury Car Detailing",
    "PPF Austin TX",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
    creator: "@eliteautostyling",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script
          type="application/ld+json"
          id="json-ld"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoBodyShop",
              name: siteConfig.name,
              image: "https://eliteautostyling.com/logo.png",
              "@id": "https://eliteautostyling.com",
              url: "https://eliteautostyling.com",
              telephone: siteConfig.contact.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: "8901 Research Blvd, Suite 240",
                addressLocality: "Austin",
                addressRegion: "TX",
                postalCode: "78758",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.3658,
                longitude: -97.7137,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "00:00",
                  closes: "00:00",
                },
              ],
              priceRange: "$$",
            }),
          }}
        />
      </body>
    </html>
  );
}