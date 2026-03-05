import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const metadataBase = new URL("https://eliteautostyling.com");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Elite Auto Styling | Premier Auto Detailing in Austin",
    template: "%s | Elite Auto Styling"
  },
  description: "Austin's premier automotive detailing and paint protection studio. Specializing in ceramic coatings, PPF, window tinting, and full interior/exterior detailing for luxury and exotic vehicles.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eliteautostyling.com",
    siteName: "Elite Auto Styling",
    title: "Elite Auto Styling | Premier Auto Detailing in Austin",
    description: "Preserving the beauty of your investment with world-class ceramic coating and PPF services in Austin, TX.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Elite Auto Styling Workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Auto Styling | Premier Auto Detailing in Austin",
    description: "Ceramic coatings, PPF, and detailing for luxury vehicles in Austin, TX.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Elite Auto Styling",
              image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1200&h=800&fit=crop",
              telephone: "(512) 333-9104",
              email: "contact@eliteautostyling.com",
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
                latitude: 30.3645,
                longitude: -97.7102,
              },
              url: "https://eliteautostyling.com",
              priceRange: "$$",
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
                  description: "By Appointment Only",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}