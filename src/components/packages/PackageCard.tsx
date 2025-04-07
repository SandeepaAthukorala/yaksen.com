import React from "react"; 
import { CheckCircle, Star } from "lucide-react";
import { FaGoogle, FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { Mail, Bot } from "lucide-react";

interface Feature {
  text: string;
  icon?: string;
}

export interface PackageData {
  id: number;
  title: string;
  priceRange: string;
  description: string;
  features: Feature[];
  highlight?: boolean;
  category: string;
  order: number;
}

interface PackageCardProps {
  packageData: PackageData;
  onGetStartedClick: (packageData: PackageData) => void;
}

const iconMap: { [key: string]: React.ReactNode } = {
  FaGoogle: <FaGoogle className="text-red-500" />,
  FaFacebook: <FaFacebook className="text-blue-600" />,
  FaInstagram: <FaInstagram className="text-pink-500" />,
  FaTiktok: <FaTiktok className="text-black dark:text-white" />,
  FaWhatsapp: <FaWhatsapp className="text-green-500" />,
  SiCanva: <SiCanva className="text-blue-400" />,
  MailBot: <><Mail className="text-gray-500" /><Bot className="text-purple-500" /></>,
  FaFacebookFaInstagram: <><FaFacebook className="text-blue-600" /><FaInstagram className="text-pink-500" /></>,
  FaFacebookFaWhatsapp: <><FaFacebook className="text-blue-600" /><FaWhatsapp className="text-green-500" /></>,
  FaFacebookFaInstagramFaTiktok: <><FaFacebook className="text-blue-600" /><FaInstagram className="text-pink-500" /><FaTiktok className="text-black dark:text-white" /></>,
};

const PackageCard: React.FC<PackageCardProps> = ({ packageData, onGetStartedClick }) => {
  const { title, priceRange, description, features, highlight } = packageData;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onGetStartedClick(packageData);
  };

  return (
    <div
      className={`relative group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border ${
        highlight ? "border-primary ring-2 ring-primary/50" : "border-gray-200 dark:border-gray-700"
      } transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col`}
    >
      {highlight && (
        <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-6 flex items-center">
          <Star className="w-3 h-3 mr-1 fill-current" /> Popular Choice
        </div>
      )}

      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-primary font-semibold text-lg mb-4">{priceRange}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{description}</p>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.icon ? (
                <span className="text-lg sm:text-xl mr-2">{iconMap[feature.icon as keyof typeof iconMap] || feature.icon}</span>
              ) : (
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              )}
              <span className="text-gray-700 dark:text-gray-200 text-sm">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={handleButtonClick}
          className={`w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-sm ${
            highlight
              ? "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg"
              : "bg-gray-100 dark:bg-gray-700 text-primary dark:text-primary hover:bg-primary/10 dark:hover:bg-primary/20"
          }`}
        >
          Get Started Now!
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
