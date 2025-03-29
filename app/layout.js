import "./globals.css";
import { Inter } from "next/font/google";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IEEE AP-MTT Joint Chapter Bangalore | Official IEEE Student Chapter",
  description:
    "Welcome to the official website of the IEEE AP-S/MTT-S Joint Chapter, Bangalore Section. Explore events, team, education initiatives, student branches, MAPCON, and more.",
  keywords: [
    "IEEE Bangalore",
    "IEEE AP-MTT",
    "Microwave Engineering",
    "Antennas and Propagation",
    "RF and Microwave",
    "MAPCON",
    "IEEE Events India",
    "IEEE Student Branch",
    "IEEE Society Bangalore",
    "Wireless Communication",
    "IEEE Chapter India",
    "Microwave Theory",
  ],
  authors: [{ name: "IEEE AP-MTT Joint Chapter Bangalore" }],
  creator: "IEEE Bangalore Section - AP/MTT",
  publisher: "IEEE",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "IEEE AP-MTT Joint Chapter Bangalore | IEEE Official",
    description:
      "A leading hub for RF and microwave engineers under IEEE AP-S/MTT-S Joint Chapter Bangalore. Join our events, workshops, and global community.",
    url: "https://ieee-aps-mtts.netlify.app/",
    siteName: "IEEE AP-MTT Bangalore",
    images: [
      {
        url: "https://ieee-aps-mtts.netlify.app/logo.png",
        width: 1200,
        height: 630,
        alt: "IEEE AP-MTT Bangalore",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE AP-MTT Joint Chapter Bangalore",
    description:
      "Explore the official IEEE Bangalore AP-MTT chapter website. Join our community of RF & Microwave professionals.",
    images: ["https://ieee-aps-mtts.netlify.app/logo.png"],
  },
  metadataBase: new URL("https://ieee-aps-mtts.netlify.app/"),
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />

        {/* ✅ Open Graph Meta Tags (for WhatsApp, LinkedIn, Facebook, etc.) */}
        <meta
          property="og:title"
          content="IEEE AP-MTT Joint Chapter Bangalore | IEEE Official"
        />
        <meta
          property="og:description"
          content="A leading hub for RF and microwave engineers under IEEE AP-S/MTT-S Joint Chapter Bangalore. Join our events, workshops, and global community."
        />
        <meta
          property="og:image"
          content="https://ieee-aps-mtts.netlify.app/logo.png"
        />
        <meta property="og:url" content="https://ieee-aps-mtts.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IEEE AP-MTT Joint Chapter Bangalore"
        />
        <meta
          name="twitter:description"
          content="Explore the official IEEE Bangalore AP-MTT chapter website. Join our community of RF & Microwave professionals."
        />
        <meta
          name="twitter:image"
          content="https://ieee-aps-mtts.netlify.app/logo.png"
        />
      </Head>

      <html lang="en">
        <body
          className={`${inter.className} bg-gradient-to-r from-gray-900 to-gray-800 text-white`}
        >
          <Navbar />
          <div className="pt-18">{children}</div>
          <ScrollToTop />
          <Footer />
        </body>
      </html>
    </>
  );
}
