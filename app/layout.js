import "./globals.css";
import { Inter } from "next/font/google";
import ScrollToTop from "./components/ScrollToTop";
// import ProgressBar from "./components/ProgressBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IEEE Website",
  description: "Official IEEE Student Chapter Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-gray-900 to-gray-800 text-white`}
      >
        <Navbar />
        {/* <ProgressBar /> */}

        {/* Add top padding to ensure content starts below the fixed navbar */}
        <div className="pt-18">{children}</div>

        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
