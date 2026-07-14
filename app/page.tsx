import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
