import Navbar from "../components/Navbar"; 
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services"; // Import the new Services component
import Industries from "../components/Industries";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/footer/Footer";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import MeetYakira from "../components/MeetYakira";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      {/* <Technologies /> */}
      <Projects />
      <Testimonials />
      {/*<MeetYakira />*/}
      <Contact />
      <Footer />
      <ToastContainer position="bottom-right" theme="colored" />
    </div>
  );
}
