import React from "react";
import { CheckCircle, Star } from "lucide-react";

interface Feature {
  text: string;
  icon?: React.ReactNode;
}

interface PackageData {
  id: number;
  title: string;
  priceRange: string;
  description: string;
  features: Feature[];
  bestFor: string;
  highlight?: boolean;
}

interface PackageCardProps {
  packageData: PackageData;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageData }) => {
  const { title, priceRange, description, features, bestFor, highlight } = packageData;

  return (
    <div
      className={`relative group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border ${
        highlight
          ? "border-primary ring-2 ring-primary/50"
          : "border-gray-200 dark:border-gray-700"
      } transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col`} // Added flex flex-col
    >
      {highlight && (
        <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-6 flex items-center">
          <Star className="w-3 h-3 mr-1 fill-current" /> Popular Choice
        </div>
      )}

      {/* Ensure content grows to push footer down */}
      <div className="flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2"> {/* Responsive text */}
          📦 {title}
        </h3>
        <p className="text-primary font-semibold text-base sm:text-lg mb-4">{priceRange}</p> {/* Responsive text */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base">{description}</p> {/* Responsive text */}

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.icon ? (
                <span className="text-lg sm:text-xl mr-2">{feature.icon}</span>
              ) : (
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              )}
              <span className="text-gray-700 dark:text-gray-200 text-xs sm:text-sm"> {/* Responsive text */}
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer pushed to bottom */}
      <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-3"> {/* Responsive text */}
          🔹 Best for: <span className="font-semibold">{bestFor}</span>
        </p>
        <a
          href="#contact" // Link to contact section
          className={`block w-full text-center px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base ${ // Responsive padding & text
            highlight
              ? "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg"
              : "bg-gray-100 dark:bg-gray-700 text-primary dark:text-primary hover:bg-primary/10 dark:hover:bg-primary/20"
          }`}
        >
          Get Started Now!
        </a>
      </div>
    </div>
  );
};

export default PackageCard;
