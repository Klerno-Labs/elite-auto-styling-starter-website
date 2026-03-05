import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eliteautostyling.com"),
  title: {
    default: "Elite Auto Styling | Premier Detailing & PPF Austin",
    template: "%s | Elite Auto Styling"
  },
  description: "Austin's premier automotive detailing and paint protection studio. Specializing in ceramic coatings, PPF, window tinting, and full interior/exterior detailing for luxury vehicles.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eliteautostyling.com",
    siteName: "Elite Auto Styling",
    title: "Elite Auto Styling | Premier Detailing & PPF Austin",
    description: "Elite Auto Styling provides top-tier ceramic coating, PPF, and detailing services in Austin, TX. Protect your investment with perfection.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Elite Auto Styling Workshop"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Auto Styling | Premier Detailing & PPF Austin",
    description: "Elite Auto Styling provides top-tier ceramic coating, PPF, and detailing services in Austin, TX.",
    images: ["https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop"]
  },
  verification: {
    google: "your-google-verification-code"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Elite Auto Styling",
              "image": "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop",
              "telephone": "(512) 333-9104",
              "email": "contact@eliteautostyling.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8901 Research Blvd, Suite 240",
                "addressLocality": "Austin",
                "addressRegion": "TX",
                "postalCode": "78758",
                "addressCountry": "US"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "$$"
            })
          }}
        />
      </body>
    </html>
  );
}