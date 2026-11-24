import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactWidget } from "@/components/ui/FloatingContactWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://sebinmathew.com"),
  title: {
    default: "Sebin Mathew | Technical Project Manager & Full Stack Developer",
    template: "%s | Sebin Mathew",
  },
  description:
    "Portfolio of Sebin Mathew — Technical Project Manager & Full Stack Developer based in Dubai, UAE. Shipped 33+ web, SaaS, and mobile products across fintech, logistics, and enterprise ecosystems.",
  keywords: [
    "Sebin Mathew",
    "Technical Project Manager",
    "Full Stack Developer",
    "Dubai TPM",
    "Tech Lead Dubai",
    "Agile Delivery",
    "Scrum Master",
    "PRD Authoring",
    "MERN Stack",
    "Next.js",
    "Software Product Management",
    "SaaS Architecture",
    "Dubai Tech Jobs",
  ],
  authors: [{ name: "Sebin Mathew", url: "https://sebinmathew.com" }],
  creator: "Sebin Mathew",
  publisher: "Sebin Mathew",
  alternates: {
    canonical: "https://sebinmathew.com",
  },
  openGraph: {
    title: "Sebin Mathew | Technical Project Manager & Full Stack Developer",
    description:
      "Technical Project Manager & Full Stack Developer based in Dubai. 33+ verified commercial web, SaaS, and mobile products shipped with 100% CSAT.",
    url: "https://sebinmathew.com",
    siteName: "Sebin Mathew Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sebin Mathew — Technical Project Manager | Full Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebin Mathew | Technical Project Manager & Full Stack Developer",
    description:
      "Technical Project Manager & Full Stack Developer based in Dubai. 33+ verified commercial products shipped with 100% CSAT.",
    images: ["/og-image.png"],
    creator: "@sebinmathew",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface antialiased min-h-screen flex flex-col max-w-full overflow-x-clip">
        <Navbar />
        <div className="flex-1 pt-20">{children}</div>
        <Footer />
        <FloatingContactWidget />
      </body>
    </html>
  );
}
