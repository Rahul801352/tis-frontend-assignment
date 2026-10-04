import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tulas International School | Best CBSE Co-Ed Boarding School in Dehradun",
  description: "Tulas International School (TIS) is a top-ranked CBSE co-ed boarding school in Dehradun, Uttarakhand. 22-acre pollution-free campus, 16+ Olympic sports, 6:1 student-teacher ratio, and holistic Modern Gurukul education.",
  keywords: [
    "Tulas International School",
    "Best Boarding School in Dehradun",
    "CBSE Co-Ed School India",
    "Boarding School Uttarakhand",
    "Modern Gurukul Dehradun",
    "Top residential schools India",
    "16 Olympic Sports School"
  ],
  authors: [{ name: "Tulas International School" }],
  creator: "Tulas International School",
  metadataBase: new URL("https://tis.edu.in"),
  openGraph: {
    title: "Tulas International School | Best Boarding School in Dehradun",
    description: "Discover excellence in education at TIS Dehradun. 22-acre smart campus, 16+ Olympic sports disciplines, and holistic character building.",
    url: "https://tis.edu.in",
    siteName: "Tulas International School",
    images: [
      {
        url: "https://tis.edu.in/images/tis-campus-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tulas International School Dehradun Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulas International School | Dehradun",
    description: "Top-ranked CBSE Co-Ed Boarding School in Dehradun, Uttarakhand.",
    images: ["https://tis.edu.in/images/tis-campus-og.jpg"],
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
  // Schema.org structured data for Educational Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Tulas International School",
    "alternateName": "TIS",
    "url": "https://tis.edu.in",
    "logo": "https://tis.edu.in/logo.png",
    "description": "Top-ranked CBSE-affiliated co-educational residential boarding school in Dehradun, Uttarakhand offering Classes IV to XII.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dhoolkot, P.O – Selaqui, Chakrata Road",
      "addressLocality": "Dehradun",
      "addressRegion": "Uttarakhand",
      "postalCode": "248011",
      "addressCountry": "IN"
    },
    "telephone": "+91-9837983791",
    "email": "info@tis.edu.in"
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#fdfbf7] dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased selection:bg-[#b90124] selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ToastProvider>
            {/* Advanced Features 1 & 4 */}
            <CustomCursor />
            <ScrollProgress />

            {/* Main Application Content */}
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
