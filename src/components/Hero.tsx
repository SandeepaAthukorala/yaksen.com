import { ArrowRight } from "lucide-react";
import HeroSlideshow from "./HeroSlideshow";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <HeroSlideshow />
      <div className="relative z-20">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                <span className="block font-light">Unlock Your</span>
                <span className="block mt-2">Business Potential with</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  Smart AI Solutions
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Making processes smarter, faster, more personalized, and more
                effective
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="#about"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/10 text-base font-medium rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </div>
  );
}
