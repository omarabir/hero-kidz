
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/layouts/Navbar";
import Footer from "@/Components/layouts/Footer";
import { ToastContainer } from "react-toastify";
import NextAuthProvider from "@/provider/NextAuthProvider";

const popins = Poppins({
  weight: ["300", "400", "500", "700"],
});
export const fontBangla = localFont({
  src: "../fonts/mayaboti-normal.ttf",
});
// Site URL for absolute metadata links (set NEXT_PUBLIC_SITE_URL in .env)

export const metadata = {
  metadataBase: new URL("https://hero-kidz-liart.vercel.app/"),

  title: {
    default: "HeroKidz",
    template: "%s | HeroKidz",
  },

  description:
    "HeroKidz brings safe, colorful, and educational toys that help children learn numbers, logic, and creativity through joyful play.",

  applicationName: "HeroKidz",

  keywords: [
    "learning toys",
    "educational toys for kids",
    "kids math toys",
    "preschool learning toys",
    "montessori toys",
    "early childhood learning",
    "number learning toys",
    "kids educational board",
  ],

  authors: [{ name: "HeroKidz Team" }],
  creator: "HeroKidz",
  publisher: "HeroKidz",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "https://i.ibb.co.com/ynq5sbpL/image.png",
    apple: "https://i.ibb.co.com/ynq5sbpL/image.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hero-kidz-liart.vercel.app/",
    siteName: "HeroKidz",
    title: "HeroKidz",
    description:
      "Discover colorful and safe learning toys designed to develop kids’ math skills, creativity, and confidence.",
    images: [
      {
        url: "https://i.ibb.co.com/LDbq766W/image.png",
        width: 1200,
        height: 630,
        alt: "HeroKidz Homepage Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HeroKidz",
    description:
      "Safe and educational toys to help children learn through play.",
    images: ["https://i.ibb.co.com/LDbq766W/image.png"],
  },

  category: "education",
};

export default function RootLayout({ children }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hero Kidz",
    url: siteUrl,
    logo: `${siteUrl}/assets/logo.png`,
    sameAs: [
      "https://facebook.com",
      "https://twitter.com",
      "https://instagram.com",
      "https://youtube.com",
    ],
  };

  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hero Kidz",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/products?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <NextAuthProvider>
      <html lang="en">
        <body
          className={`${popins.className} antialiased`}
          suppressHydrationWarning
        >
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
          />
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
          />
          <header className="md:w-11/12 py-2 mx-auto">
            <Navbar />
          </header>
          <main className="md:w-11/12 mx-auto py-2 min-h-[calc(100svh-302px)]">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>

          <ToastContainer />
        </body>
      </html>
    </NextAuthProvider>
  );
}
