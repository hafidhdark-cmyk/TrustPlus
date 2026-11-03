import type { Metadata } from "next";
import "./globals.css";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteData.brand.name} | Abeokuta, Ogun State`,
  description: `${siteData.brand.positioning} Branches in Ibara and Oke-Ata. WhatsApp delivery available across Abeokuta.`,
  keywords: [
    "TrustPlus Pharmacy",
    "Pharmacy in Abeokuta",
    "Pharmacy Ibara",
    "Pharmacy Oke-Ata",
    "Ogun State Superstore",
    "Drug Delivery Abeokuta",
    "Malaria test Abeokuta",
  ],
  authors: [{ name: siteData.brand.name }],
  openGraph: {
    title: siteData.brand.name,
    description: siteData.brand.tagline,
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brandBg text-ink min-h-screen flex flex-col font-sans selection:bg-sky selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
