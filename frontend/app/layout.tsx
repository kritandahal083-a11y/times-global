import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Times Global Data Center | Data Center Services in Nepal",
    template: "%s | Times Global Data Center",
  },
  description:
    "Times Global Data Center delivers enterprise-grade colocation, rack space, managed hosting, network connectivity and secure data center infrastructure in Nepal.",
  keywords: [
    "data center Nepal",
    "colocation Nepal",
    "server hosting Nepal",
    "rack space",
    "managed hosting",
    "disaster recovery",
    "Times Global Data Center",
    "TGDC",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "Times Global Data Center | Data Center Services in Nepal",
    description:
      "Enterprise-grade data center infrastructure, colocation, hosting and connectivity in Nepal.",
    url: "/",
    images: [{ url: "/images/hero-rack.jpg", width: 1086, height: 1448, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Times Global Data Center",
    description:
      "Enterprise-grade data center infrastructure, colocation, hosting and connectivity in Nepal.",
    images: ["/images/hero-rack.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#060709",
  colorScheme: "dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressCountry: "NP",
    addressLocality: "Kathmandu",
    streetAddress: "Dhumbarahi",
  },
  description:
    "Times Global Data Center operates enterprise-grade data center infrastructure in Nepal.",
  sameAs: [site.social.linkedin, site.social.facebook],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#localbusiness`,
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressCountry: "NP",
    addressLocality: "Kathmandu",
    streetAddress: "Dhumbarahi",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.7172,
    longitude: 85.324,
  },
  description:
    "Enterprise-grade data center services in Nepal: colocation, managed hosting, network connectivity and disaster recovery.",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-[100dvh] flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main id="main" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
