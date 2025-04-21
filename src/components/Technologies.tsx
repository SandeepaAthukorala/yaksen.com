import TechCardNew from "./technology/TechCardNew";
import { technologies } from "../resources/icons";

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Technologies 🔧
          </h2>
        </div>

        <div className="mt-10 overflow-x-auto pb-4 px-4 scrollbar-hide">
          {/* Grid layout for responsive 4-card rows */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center px-8 py-2">
            {technologies.map((icon, index) => (
              <TechCardNew 
                key={index} 
                icon={icon.icon}
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
