import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Logo from "./navbar/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      {/* Rest of the navbar code remains the same until the blog link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("services")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation("projects")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation("packages")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Packages
            </button>
            {/* <button
              onClick={() => handleNavigation("testimonials")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Testimonials
            </button> */}
            <button
              onClick={() => handleNavigation("contact")}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 font-bold"
            >
              Let's Connect
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            <button
              onClick={() => handleNavigation("about")}
              className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("projects")}
              className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation("packages")}
              className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Packages
            </button>
            <button
              onClick={() => handleNavigation("yakira")}
              className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Yakira
            </button>
            <button
              onClick={() => handleNavigation("testimonials")}
              className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="block w-full text-left px-3 py-2 text-primary font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
