import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sebin Mathew | Technical Project Manager & Business Analyst",
  description:
    "Portfolio of Sebin Mathew - Technical Project Manager & Business Analyst in Dubai, UAE. Shipped 34+ web, SaaS, and mobile products across fintech, logistics, and enterprise ecosystems.",
  keywords: [
    "Technical Project Manager",
    "Business Analyst",
    "Dubai TPM",
    "Agile",
    "Scrum",
    "PRD",
    "MERN",
    "Next.js",
    "Sebin Mathew",
  ],
  authors: [{ name: "Sebin Mathew" }],
  openGraph: {
    title: "Sebin Mathew | Technical Project Manager & Business Analyst",
    description:
      "Turning ideas into products people actually use. 34+ commercial products shipped.",
    type: "website",
    locale: "en_US",
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
      <body className="bg-surface text-on-surface antialiased min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
