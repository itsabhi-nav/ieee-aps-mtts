// app/page.js
// import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSociety from "./components/AboutSociety";
// import ChairMessage from "./components/ChairMessage";
import Features from "./components/Features";
import Events from "./components/Events";
// import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Timeline from "./components/Timeline";
// import SponsorCarousel from "./components/SponsorCarousel";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSociety />
      <Features />
      {/* <ChairMessage /> */}
      <Events />
      <Timeline />
      <Gallery />
      <Blog />
      <FAQ />
      {/* <Testimonials /> */}
      {/* <SponsorCarousel /> */}
    </main>
  );
}
