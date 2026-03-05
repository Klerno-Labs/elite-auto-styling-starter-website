import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eliteautostyling.com"),
  title: {
    default: "Elite Auto Styling | Premier Auto Detailing & PPF in Austin",
    template: "%s | Elite Auto Styling"
  },
  description: "Austin's premier automotive detailing and paint protection studio. Specializing in ceramic coatings, PPF, window tinting, and full interior/exterior detailing for luxury vehicles.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eliteautostyling.com",
    siteName: "Elite Auto Styling",
    title: "Elite Auto Styling | Premier Auto Detailing & PPF in Austin",
    description: "Preserving the beauty of your investment with world-class ceramic coating and detailing services in Austin, TX.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Elite Auto Styling Workshop",
      },
    ],
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
    <html lang="en" className={cn(inter.variable, manrope.variable)}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoBodyShop",
              name: "Elite Auto Styling",
              image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop",
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
                latitude: 30.3649,
                longitude: -97.7106,
              },
              url: "https://eliteautostyling.com",
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
              priceRange: "$$",
            }),
          }}
        />
      </body>
    </html>
  );
}