import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const Stats = dynamic(() => import("@/components/Stats"));
const Projects = dynamic(() => import("@/components/Projects"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      {/* Dynamic Header / Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
