import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services"; // Renders OurServices and MeetYakira
import Packages from "../components/Packages"; // Import the new Packages component
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/footer/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Packages /> {/* Add the Packages section here */}
      <Technologies />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
