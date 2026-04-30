import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://peterrojas.dev"),
  title: {
    default: "Peter Rojas — CTO | AI Engineering | Cloud & Data Architecture",
    template: "%s | Peter Rojas"
  },
  description:
    "CTO y líder tecnológico VP-level que combina estrategia, tecnología y ejecución real de negocio. Especializado en AI Engineering, Cloud/Data Architecture, liderazgo tecnológico y escalamiento de equipos.",
  keywords: [
    "Peter Rojas",
    "CTO",
    "VP Technology",
    "VP Engineering",
    "Technology Leadership",
    "AI Engineering",
    "Cloud Architecture",
    "Data Architecture",
    "BigQuery",
    "GCP",
    "Azure",
    "Engineering Leadership",
    "Fractional CTO",
    "Technology Leadership",
    "LATAM CTO",
    "Strategic Technology Leadership",
    "Engineering Execution",
    "Fractional CTO LATAM"
  ],
  authors: [{ name: "Peter Rojas" }],
  creator: "Peter Rojas",
  publisher: "Peter Rojas",
  alternates: {
    canonical: "https://peterrojas.dev"
  },
  verification: {
    google: "uo9JG0aDN8R-eui183i0N35zErLDW_iaS0Y7nVx1SSE"
  },
  openGraph: {
    title: "Peter Rojas — CTO | AI Engineering | Cloud & Data Architecture",
    description:
      "CTO que combina estrategia, tecnología y ejecución real de negocio.",
    url: "https://peterrojas.dev",
    siteName: "Peter Rojas",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Peter Rojas — CTO | AI Engineering | Cloud & Data Architecture"
      }
    ],
    locale: "es_BO",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Rojas — CTO | AI Engineering | Cloud & Data Architecture",
    description:
      "CTO que combina estrategia, tecnología y ejecución real de negocio.",
    images: ["/og.png"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Peter Rojas",
    url: "https://peterrojas.dev",
    jobTitle: "CTO | AI Engineering | Cloud & Data Architecture",
    sameAs: [
      "https://www.linkedin.com/in/peter-rojas-beltran/",
      "https://github.com/peterrojasbeltran"
    ],
    knowsAbout: [
      "AI Engineering",
      "Cloud Architecture",
      "Data Architecture",
      "BigQuery",
      "GCP",
      "Azure",
      "Engineering Leadership",
      "VP Technology"
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
